import * as express from 'express';
import { query } from '../db';

const metersRoute = express.Router();

type MeterObject = {
  meter_id: string;
  last_updated: string;
  address: string;
  latitude: string;
  longitude: string;
  status: string;
};

metersRoute.get('/meters', async (req, res) => {
  const result = await query<MeterObject>('SELECT * FROM meter_info;');

  res.json(result.rows);
});

export default metersRoute;
