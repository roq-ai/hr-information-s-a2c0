import { GetQueryInterface } from 'interfaces';

export interface ItemInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;
  name?: string;

  _count?: {};
}

export interface ItemGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
}
