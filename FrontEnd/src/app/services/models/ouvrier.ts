/* tslint:disable */
/* eslint-disable */
import { EvenementChantier } from '../models/evenement-chantier';
import { Personne } from '../models/personne';
export interface Ouvrier {
  id?: number;
  image?: string;
  jourTravaillers?: Array<EvenementChantier>;
  personne?: Personne;
  profesion?: string;
}
