/* tslint:disable */
/* eslint-disable */
import { Construction } from '../models/construction';
import { Person } from '../models/person';
export interface Customer {
  constructions: Array<Construction>;
  email: string;
  generaleInfo: Person;
  id: number;
  phone: string;
}
