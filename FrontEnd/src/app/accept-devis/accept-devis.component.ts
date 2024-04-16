import {AfterViewInit, Component} from '@angular/core';
import {DevisControllerService} from "../services/services/devis-controller.service";
import {ActivatedRoute} from "@angular/router";
import {Devis} from "../services/models/devis";

@Component({
  selector: 'app-accept-devis',
  templateUrl: './accept-devis.component.html',
  styleUrls: ['./accept-devis.component.css']
})
export class AcceptDevisComponent implements AfterViewInit {


  constructor(private devisService: DevisControllerService,
              private route: ActivatedRoute) {
  }

  accpeted: boolean = false
  refused: boolean = false
  devisId: any = 0
  devis: any

  public acceptDevis(): void {
    this.accpeted = true
    this.updateDevis("accepter")
  }

  public refuseDevis(): void {
    this.refused = true
    this.updateDevis("refuser")
  }

  public updateDevis(status :string): void {
    var updatedDevis : any = {
      id: 0,
      date: "",
      etat: "",
      ref: "",
      status: "",
      devisRequest: {id: ""},
      battery: {
        modelBattery: "",
        priceBattery: 0,
        quantityBattery: 0,
        totalBattery: 0,
        tvaBattery: 0
      },
      cable: {
        modelCable: "",
        priceCable: 0,
        quantityCable: 0,
        totalCable: 0,
        tvaCable: 0
      },
      meter: {
        modelMeter: "",
        priceMeter: 0,
        quantityMeter: 0,
        totalMeter: 0,
        tvaMeter: 0
      },
      inverter: {
        modelInverter: "",
        priceInverter: 0,
        quantityInverter: 0,
        totalInverter: 0,
        tvaInverter: 0
      },
      solarPanel: {
        modelSolarPanel: "",
        priceSolarPanel: 0,
        quantitySolarPanel: 0,
        totalSolarPanel: 0,
        tvaSolarPanel: 0
      },
      systemFixing: {
        modelSystemFixing: "",
        priceSystemFixing: 0,
        quantitySystemFixing: 0,
        totalSystemFixing: 0,
        tvaSystemFixing: 0
      },
      total: 0
    }
    updatedDevis.id = this.devis.id;
    updatedDevis.ref = this.devis.ref;
    updatedDevis.status = this.devis.status;
    updatedDevis.devisRequest.id = String(this.devis.devisRequest)
    updatedDevis.etat = this.devis.etat;
    updatedDevis.cable = this.devis.cable;
    updatedDevis.solarPanel = this.devis.solarPanel;
    updatedDevis.battery = this.devis.battery;
    updatedDevis.systemFixing = this.devis.systemFixing;
    updatedDevis.inverter = this.devis.inverter;
    updatedDevis.meter = this.devis.meter;
    updatedDevis.total = this.devis.total;
    updatedDevis.status = status
    this.devisService.updateDevis({
      body : updatedDevis
    }).subscribe({
      error:(err)=>console.log(err.error.text)
    })
  }

  public getDevisById(): void {
    this.devisService.getDevisById({
      id: this.devisId
    }).subscribe({
      next: (res) => {
        this.devis = res
        console.log(res)
      },
      error: (err) => console.log(err)
    })
  }

  ngAfterViewInit() {
    this.devisId = parseInt(this.route.snapshot.paramMap.get('Id')!, 10);
    this.getDevisById()
  }
}
