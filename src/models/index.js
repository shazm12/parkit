// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const ParkingStatus = {
  "PARKED": "PARKED",
  "EXITED": "EXITED"
};

const { Mall, ParkingBill, Blocks, Parking } = initSchema(schema);

export {
  Mall,
  ParkingBill,
  Blocks,
  Parking,
  ParkingStatus
};