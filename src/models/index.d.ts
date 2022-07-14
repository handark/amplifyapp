import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type InvoiceModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class InvoiceModel {
  readonly id: string;
  readonly number: string;
  readonly date: string;
  readonly taxes: number;
  readonly total: number;
  readonly expirationDate: string;
  readonly senderNif: string;
  readonly senderName: string;
  readonly senderEmail?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<InvoiceModel, InvoiceModelMetaData>);
  static copyOf(source: InvoiceModel, mutator: (draft: MutableModel<InvoiceModel, InvoiceModelMetaData>) => MutableModel<InvoiceModel, InvoiceModelMetaData> | void): InvoiceModel;
}