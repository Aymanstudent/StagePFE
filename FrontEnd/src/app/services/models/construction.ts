/* tslint:disable */
/* eslint-disable */
import { Activity } from '../models/activity';
import { Amendment } from '../models/amendment';
import {devis} from "../../models/devis";
export interface Construction {
  customer: { id : string};
  description: string;
  id: number;
  location: string;
  devisList : Array<devis>
}
