/* tslint:disable */
/* eslint-disable */
import { Activity } from '../models/activity';
export interface Vehicule {
  activities?: Array<Activity>;
  available?: boolean;
  id?: number;
  marque?: string;
  model?: string;
  ref?: string;
}
