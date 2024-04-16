import {Injectable} from '@angular/core';
import {DevisRequest} from "../models/devis-request";
import {Devis} from "../models/devis";

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  devisRequestId: number = 0
  devisId: number = 0
  devisRequest: DevisRequest = {
    id: 0, available_area: 0, building_type: "", post_code: "", consumption: 0, electricity_access: false, location: "",
    potential_customer: {firstName: "", lastName: "", phone: "", email: ""},
    roof_type: "", status: ""
  }

  devis: Devis = {
    id: 0, date: "", etat: "", ref: "", status: "",
    construction: {id: ""}, devisRequest: {id: ""},
    battery: {modelBattery: "", priceBattery: 0, quantityBattery: 0, totalBattery: 0, tvaBattery: 0},
    cable: {modelCable: "", priceCable: 0, quantityCable: 0, totalCable: 0, tvaCable: 0},
    meter: {modelMeter: "", priceMeter: 0, quantityMeter: 0, totalMeter: 0, tvaMeter: 0},
    inverter: {modelInverter: "", priceInverter: 0, quantityInverter: 0, totalInverter: 0, tvaInverter: 0},
    solarPanel: {modelSolarPanel: "", priceSolarPanel: 0, quantitySolarPanel: 0, totalSolarPanel: 0, tvaSolarPanel: 0},
    systemFixing: {modelSystemFixing: "", priceSystemFixing: 0, quantitySystemFixing: 0, totalSystemFixing: 0, tvaSystemFixing: 0},
    total: 0
  }

}
