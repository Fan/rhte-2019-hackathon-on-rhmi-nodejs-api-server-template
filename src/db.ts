import { Pool } from 'pg';
import * as env from 'env-var';
import log from './log';

const connectionString = env
  .get(
    'PG_CONNECTION_STRING',
    'postgresql://evals21:Password1@localhost:5432/city-info'
  )
  .asUrlString();

const pool = new Pool({ connectionString });

/**
 * Performs a database query and returns the resulting rows.
 * You can use a RowType generic to get types for returned rows.
 * @param sql
 * @param params
 */
export async function query<RowType>(sql: string, params?: any[]) {
  log.debug('query sql:%s', sql);
  log.debug('query params:%j', params);

  const client = await pool.connect();
  const response = await client.query<RowType>(sql, params);

  client.release();

  return response;
}
