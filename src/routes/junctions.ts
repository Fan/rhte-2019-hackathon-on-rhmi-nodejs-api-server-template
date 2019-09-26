import * as express from 'express';
import { query } from '../db';

const junctionsRoute = express.Router();

type JunctionObject = {
  junction_id: number;
  count_ns: number;
  count_ew: number;
  last_updated: string;
  longitude: number;
  latitude: number;
};

junctionsRoute.get('/', async (req, res) => {
  const result = await query<JunctionObject>('SELECT * FROM junction_info;');

  res.json(result.rows);
});

export default junctionsRoute;
