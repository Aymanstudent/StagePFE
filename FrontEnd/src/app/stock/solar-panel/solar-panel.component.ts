import {AfterViewInit, Component} from '@angular/core';
import {SolarPanelControllerService} from "../../services/services/solar-panel-controller.service";
import {SolarPanel} from "../../services/models/solar-panel";
import {deleteSolarPanelById} from "../../services/fn/solar-panel-controller/delete-solar-panel-by-id";

@Component({
  selector: 'app-solar-panel',
  templateUrl: './solar-panel.component.html',
  styleUrls: ['./solar-panel.component.css']
})
export class SolarPanelComponent implements AfterViewInit {


  constructor(private solarPanelService: SolarPanelControllerService) {
  }

  maxStock : number = 200;
  stockSize : any = 0;
  quantity: any = 0;
  solarPanelsList: Array<SolarPanel> = []
  solarPanel: SolarPanel = {
    id: 0,
    height: 0,
    image: "",
    maximum_current: 0,
    maximum_voltage: 0,
    model: "",
    nominal_power: 0,
    price: 0,
    quantity: 0,
    type_cell: "",
    weight: 0,
    width: 0
  }

  public calculateStock(): number{
    var stock : any = 0
    for (let i = 0; i < this.solarPanelsList.length; i++){
      stock += this.solarPanelsList[i].quantity
    }
    return (stock * 100) / this.maxStock;
  }

  public getSolarPanels(): void {
    this.solarPanelService.getSolarPanels()
      .subscribe({
        next: (res) => this.solarPanelsList = res,
        error: (err) => console.log(err)
      })
  }

  public addSolarPanel(): void {
    this.solarPanelService.addSolarPanel({
      body: this.solarPanel
    })
      .subscribe({
        next: (res) => console.log(res),
        error: (err) => console.log(err)
      })
  }

  public updateSolarPanel(): void {
    this.solarPanelService.updateSolarPanel({
      body: this.solarPanel
    })
      .subscribe({
        next: (res) => console.log(res),
        error: (err) => console.log(err)
      })
  }

  public deleteSolarPanelById(id :any){
    this.solarPanelService.deleteSolarPanelById({
      id : id
    }).subscribe({
      next:(res)=>console.log(res),
      error:(err)=>console.log(err)
    })
  }

  public addQuantity(solarPanel : SolarPanel): void {
    this.solarPanel = solarPanel
    this.solarPanel.quantity += this.quantity
    this.updateSolarPanel()
  }

  public selectSolarPanel(solarPanel: SolarPanel): void {
    this.solarPanel = solarPanel;
  }

  public clearSolarPanel():void{
    this.solarPanel = {
      id: 0,
      height: 0,
      image: "",
      maximum_current: 0,
      maximum_voltage: 0,
      model: "",
      nominal_power: 0,
      price: 0,
      quantity: 0,
      type_cell: "",
      weight: 0,
      width: 0
    }
  }

  public getImageUrl(base64String: string | undefined): string {
    return base64String ? `${base64String}` : ''; // Handle missing image
  }

  public onKey(event: any): void {
    this.quantity = parseInt(event.target.value);
  }

  public onFileChange(event: any): void {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      this.solarPanel.image = reader.result as string;
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  ngAfterViewInit() {
    this.getSolarPanels()
  }

}
