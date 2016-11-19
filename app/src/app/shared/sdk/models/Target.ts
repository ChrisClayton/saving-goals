/* tslint:disable */
import {
  Account
} from '../index';

export interface TargetInterface {
  title: string;
  endDate?: any;
  totalValue?: number;
  description?: string;
  id?: number;
  accountId?: number;
  account?: Account;
}

export class Target implements TargetInterface {
  title: string;
  endDate: any;
  totalValue: number;
  description: string;
  id: number;
  accountId: number;
  account: Account;
  constructor(instance?: Target) {
    Object.assign(this, instance);
  }
}
