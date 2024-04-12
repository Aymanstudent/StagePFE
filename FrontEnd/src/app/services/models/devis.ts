/* tslint:disable */
/* eslint-disable */
import { DevisMateriauBatteri } from '../models/devis-materiau-batteri';
import { DevisMateriauCable } from '../models/devis-materiau-cable';
import { DevisMateriauCompteur } from '../models/devis-materiau-compteur';
import { DevisMateriauOnduleur } from '../models/devis-materiau-onduleur';
import { DevisMateriauPanneauSolaire } from '../models/devis-materiau-panneau-solaire';
import { DevisMateriauSystemeFixation } from '../models/devis-materiau-systeme-fixation';
export interface Devis {
  batteri?: DevisMateriauBatteri;
  cable?: DevisMateriauCable;
  chantier?: number;
  compteur?: DevisMateriauCompteur;
  date?: string;
  demandeDevis?: number;
  etat?: string;
  id?: number;
  onduleur?: DevisMateriauOnduleur;
  panneauSolaire?: DevisMateriauPanneauSolaire;
  ref?: string;
  status?: string;
  systemeFixation?: DevisMateriauSystemeFixation;
  total?: number;
}
