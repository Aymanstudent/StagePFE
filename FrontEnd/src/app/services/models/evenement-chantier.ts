/* tslint:disable */
/* eslint-disable */
import { Ouvrier } from '../models/ouvrier';
import { Tache } from '../models/tache';
export interface EvenementChantier {
  chantier?: number;
  end_date?: string;
  id?: number;
  ouvriers?: Array<Ouvrier>;
  start_date?: string;
  taches?: Array<Tache>;
  text?: string;
  vehicule?: number;
}
