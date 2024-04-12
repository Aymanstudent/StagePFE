/* tslint:disable */
/* eslint-disable */
import { EvenementChantier } from '../models/evenement-chantier';
export interface Vehicule {
  disponible?: boolean;
  evenementChantiers?: Array<EvenementChantier>;
  id?: number;
  marque?: string;
  modele?: string;
  ref?: string;
}
