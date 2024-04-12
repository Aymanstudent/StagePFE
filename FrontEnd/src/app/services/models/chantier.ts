/* tslint:disable */
/* eslint-disable */
import { Avenant } from '../models/avenant';
import { EvenementChantier } from '../models/evenement-chantier';
export interface Chantier {
  avenants?: Array<Avenant>;
  client?: number;
  description?: string;
  devis?: number;
  emplacement?: string;
  evenementChantiers?: Array<EvenementChantier>;
  facture?: number;
  id?: number;
}
