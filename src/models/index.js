// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { InvoiceModel } = initSchema(schema);

export {
  InvoiceModel
};