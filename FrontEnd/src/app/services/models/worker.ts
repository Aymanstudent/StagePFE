/* tslint:disable */
/* eslint-disable */
import { Activity } from '../models/activity';
import { Person } from '../models/person';
export interface Worker {
  activities?: Array<Activity>;
  email?: string;
  generaleInfo: Person;
  id?: number;
  image?: string;
  phone?: string;
  profession?: string;
}
