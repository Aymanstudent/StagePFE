import {AfterViewInit, Component} from '@angular/core';
import {CustomerControllerService} from "../../services/services/customer-controller.service";
import {ConstructionControllerService} from "../../services/services/construction-controller.service";
import {DevisControllerService} from "../../services/services/devis-controller.service";
import {SharedDataService} from "../../services/sharedData/shared-data.service";
import {DevisRequestControllerService} from "../../services/services/devis-request-controller.service";
import {Customer} from "../../services/models/customer";
import {DevisRequest} from "../../services/models/devis-request";
import {Construction} from "../../services/models/construction";

@Component({
  selector: 'app-new-construction',
  templateUrl: './new-construction.component.html',
  styleUrls: ['./new-construction.component.css']
})
export class NewConstructionComponent implements AfterViewInit {
  constructor(private customerService: CustomerControllerService,
              private constructionService: ConstructionControllerService,
              private devisService: DevisControllerService,
              private sharedDataService: SharedDataService,
              private devisRequestService: DevisRequestControllerService) {
  }

  addedConstruction: boolean = false
  customerList: Array<Customer> = []
  errorCustomerRequest: boolean = false;
  devis: any = {
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

  devisRequest: DevisRequest = {
    id: 0, available_area: 0, building_type: "", post_code: "", consumption: 0, electricity_access: false, location: "",
    potential_customer: {firstName: "", lastName: "", phone: "", email: ""},
    roof_type: "", status: ""
  }

  customer: Customer = {
    id: 0,
    generaleInfo: {firstName: "", lastName: "", age: 0, address: ""},
    phone: "", email: "", constructions: []
  }

  construction: Construction = {
    id: 0,
    location: this.devisRequest.location,
    customer: {id: ""}, description: "", devisList: []
  }

  public getCustomers(): void {
    this.customerService.getCustomers().subscribe({
      next: (res) => this.customerList = res
    })
  }

  public getDevisRequestById(devisRequestId: any) {
    this.devisRequestService.getDevisRequestById({id: devisRequestId})
      .subscribe({
        next: (res) => this.devisRequest = res
      })
  }

  selectCustomer(event: any) {
    this.customer.id = event.target.value
    this.customerService.getCustomerById({id: this.customer.id})
      .subscribe({
        next: (res) => this.customer = res
      });
    this.construction.customer.id = this.customer.id.toString()
  }

  public getDevisById(devisId: any) {
    this.devisService.getDevisById({id: devisId})
      .subscribe({
        next: (res) => {
          this.devis = res
        }
      })
  }

  public updateDevis(): void {
    var devisRequestId = this.devis.devisRequest.toString()
    this.devis.devisRequest = {id: devisRequestId}
    this.devisService.updateDevis({body: this.devis})
      .subscribe({
        error: (err) => console.log(err)
      })
  }

  public addConstructor(): void {
    var newConstruction: Construction = {
      id: 0,
      devisList: [],
      customer: {id: ""},
      description: "",
      location: ""
    }
    if (!this.errorCustomerRequest) {
      this.construction.location = this.devisRequest.location
      this.constructionService.saveConstruction({
        body: this.construction
      }).subscribe({
          next: (res) => {
            if (res) {
              console.log(res)
              newConstruction = res;
              this.addedConstruction = true;
              this.devis.construction = {id: newConstruction.id.toString()}
              this.updateDevis();
              setTimeout(() => {
                this.addedConstruction = false;
              }, 3000);
            }
          },
          error: (err) => {
            if (err.status === 200) {
              console.log(err)
            } else {
              this.errorCustomerRequest = true
            }
          }
        }
      )
    }
  }

  ngAfterViewInit() {
    this.getCustomers();
    this.getDevisById(this.sharedDataService.devisId)
    this.getDevisRequestById(this.sharedDataService.devisRequestId);
  }
}
