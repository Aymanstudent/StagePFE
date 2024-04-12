/* tslint:disable */
/* eslint-disable */
import { Chantier } from '../models/chantier';
import { Personne } from '../models/personne';
export interface Client {
  chantiers?: Array<Chantier>;
  id?: number;
  personne?: Personne;
}
