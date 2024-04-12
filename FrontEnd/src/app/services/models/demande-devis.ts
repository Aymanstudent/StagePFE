/* tslint:disable */
/* eslint-disable */
import { ClientPotentiel } from '../models/client-potentiel';
export interface DemandeDevis {
  access_elec?: boolean;
  batiment_type?: string;
  clientPotentiel?: ClientPotentiel;
  code_Postal?: string;
  consommation?: number;
  devis?: number;
  emplacement?: string;
  id?: number;
  status?: string;
  surface_disponible?: number;
  toiture_type?: string;
}
