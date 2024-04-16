import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {DevisRequest} from "../services/models/devis-request";
import {DevisRequestComponent} from "../devis-request/devis-request.component";
import {SharedDataService} from "../services/sharedData/shared-data.service";
import {Devis} from "../services/models/devis";
import {DevisControllerService} from "../services/services/devis-controller.service";
import {SolarPanelControllerService} from "../services/services/solar-panel-controller.service";
import {InverterControllerService} from "../services/services/inverter-controller.service";
import {MeterControllerService} from "../services/services/meter-controller.service";
import {CableControllerService} from "../services/services/cable-controller.service";
import {BatteryControllerService} from "../services/services/battery-controller.service";
import {SystemFixingControllerService} from "../services/services/system-fixing-controller.service";

@Component({
  selector: 'app-new-devis',
  templateUrl: './new-devis.component.html',
  styleUrls: ['./new-devis.component.css']
})
export class NewDevisComponent implements AfterViewInit {

  constructor(private sharedDataService: SharedDataService,
              private devisService: DevisControllerService,
              private solarPanelService: SolarPanelControllerService,
              private inverterService: InverterControllerService,
              private meterService: MeterControllerService,
              private cableService: CableControllerService,
              private batteryService: BatteryControllerService,
              private systemFixingService: SystemFixingControllerService) {
  }

  SolarPanelList: any[] = []
  SystemFixingList: any[] = []
  InverterList: any[] = []
  MeterList: any[] = []
  CableList: any[] = []
  BatteryList: any[] = []
  Tva: any = [0, 5, 10, 15]

  devisRequest: DevisRequest = {
    id: 0,
    available_area: 0,
    building_type: "",
    post_code: "",
    consumption: 0,
    electricity_access: false,
    location: "",
    potential_customer: {
      firstName: "",
      lastName: "",
      phone: "",
      email: ""
    },
    roof_type: "",
    status: ""
  }

  devis: any = {
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

  public getSolarPanelList(): void {
    this.solarPanelService.getSolarPanels().subscribe(
      res => {
        this.SolarPanelList = res
      }, err => {
        console.log(err)
      }
    )
  }

  public getMeterList(): void {
    this.meterService.getMeters().subscribe(
      res => {
        this.MeterList = res
      }, err => {
        console.log(err)
      }
    )
  }

  public getInverterList(): void {
    this.inverterService.getInverters().subscribe(
      res => {
        this.InverterList = res
      }, err => {
        console.log(err)
      }
    )
  }

  public getCableList(): void {
    this.cableService.getCables().subscribe(
      res => {
        this.CableList = res
      }, err => {
        console.log(err)
      }
    )
  }

  public getSystemFixingList(): void {
    this.systemFixingService.getSystemFixings().subscribe(
      res => {
        this.SystemFixingList = res
      }, err => {
        console.log(err)
      }
    )
  }

  public getBatteryList(): void {
    this.batteryService.getBatteries().subscribe(
      res => {
        this.BatteryList = res
      }, err => {
        console.log(err)
      }
    )
  }

  public selectSolarPanelPrice(event: any): void {
    this.devis.solarPanel.priceSolarPanel = event.target.value;
  }

  public selectInverterPrice(event: any): void {
    this.devis.inverter.priceInverter = event.target.value;
  }

  public selectMeterPrice(event: any): void {
    this.devis.meter.priceMeter = event.target.value;
  }

  public selectCablePrice(event: any): void {
    this.devis.cable.priceCable = event.target.value;
  }

  public selectBatteryPrice(event: any): void {
    this.devis.battery.priceBattery = event.target.value;
  }

  public selectSystemFixingPrice(event: any): void {
    this.devis.systemFixing.priceSystemFixing = event.target.value;
  }


  public calculateTotalDevisSolarPanel(): void {
    const nb: any = this.devis.solarPanel.quantitySolarPanel
    const price: any = this.devis.solarPanel.priceSolarPanel
    const tva: any = this.devis.solarPanel.tvaSolarPanel
    this.devis.solarPanel.totalSolarPanel = ((nb * price) + ((nb * price) * tva) / 100);
  }

  public calculateTotalDevisInverter(): void {
    const nb: any = this.devis.inverter.quantityInverter
    const price: any = this.devis.inverter.priceInverter
    const tva: any = this.devis.inverter.tvaInverter
    this.devis.inverter.totalInverter = ((nb * price) + ((nb * price) * tva) / 100);
  }

  public calculateTotalDevisSystemFixing(): void {
    const nb: any = this.devis.systemFixing.quantitySystemFixing
    const price: any = this.devis.systemFixing.priceSystemFixing
    const tva: any = this.devis.systemFixing.tvaSystemFixing
    this.devis.systemFixing.totalSystemFixing = ((nb * price) + ((nb * price) * tva) / 100);
  }

  public calculateTotalDevisCable(): void {
    const nb: any = this.devis.cable.quantityCable
    const price: any = this.devis.cable.priceCable
    const tva: any = this.devis.cable.tvaCable
    this.devis.cable.totalCable = ((nb * price) + ((nb * price) * tva) / 100);
  }

  public calculateTotalDevisBattery(): void {
    const nb: any = this.devis.battery.quantityBattery
    const price: any = this.devis.battery.priceBattery
    const tva: any = this.devis.battery.tvaBattery
    this.devis.battery.totalBattery = ((nb * price) + ((nb * price) * tva) / 100);
  }

  public calculateTotalDevisMeter(): void {
    const nb: any = this.devis.meter.quantityMeter
    const price: any = this.devis.meter.priceMeter
    const tva: any = this.devis.meter.tvaMeter
    this.devis.meter.totalMeter = ((nb * price) + ((nb * price) * tva) / 100);
  }

  public calculateDevisTotal(): void {
    this.devis.total = this.devis.meter.totalMeter +
      this.devis.battery.totalBattery +
      this.devis.inverter.totalInverter +
      this.devis.cable.totalCable +
      this.devis.solarPanel.totalSolarPanel +
      this.devis.systemFixing.totalSystemFixing
  }

  public generateNewReference(): string{
    var ref = "ref_"
    const x = Math.random() * 1000;
    const y = Math.random() * 1000;
    const sum = x + y - 1;
    return ref + Math.floor(sum);
  }

  public generateDate(): string{
    const date = new Date();
    const year = date.getFullYear().toString().padStart(4, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  public addDevis(): void {
    this.devis.devisRequest.id = this.devisRequest.id.toString()
    this.devis.date = this.generateDate()
    this.devis.ref = this.generateNewReference()
    this.devis.status = "à envoier"
    console.log(this.devis)
    this.devisService.addDevis({
      body: this.devis
    }).subscribe(
      res => {
        console.log(res)
      }, err => {
        console.log(err)
      }
    )
  }

  public updateDevis(): void {
    this.devisService.updateDevis({
      body: this.devis
    }).subscribe(
      res => {
        console.log(res)
      }, err => {
        console.log(err)
      }
    )
  }

  public deleteDevis(): void {
    this.devisService.deleteDevis({
      id: this.devis.id
    }).subscribe(
      res => {
        console.log(res)
      }, err => {
        console.log(err)
      }
    )
  }

  @ViewChild(DevisRequestComponent) child: any;

  ngAfterViewInit() {
    this.devisRequest = this.sharedDataService.devisRequest
    this.getSolarPanelList()
    this.getBatteryList()
    this.getInverterList()
    this.getMeterList()
    this.getCableList()
    this.getSystemFixingList()
  }

}
