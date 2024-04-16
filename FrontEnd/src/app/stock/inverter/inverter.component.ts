import {AfterViewInit, Component} from '@angular/core';
import {InverterControllerService} from "../../services/services/inverter-controller.service";
import {Inverter} from "../../services/models/inverter";

@Component({
  selector: 'app-inverter',
  templateUrl: './inverter.component.html',
  styleUrls: ['./inverter.component.css']
})
export class InverterComponent implements AfterViewInit{

  constructor(private inverterService: InverterControllerService) {
  }
  maxStock: number = 200
  quantity: any
  inverterList: Array<Inverter> = []
  inverter: Inverter = {
    id: 0,
    image: "",
    nominal_power: 0,
    price: 0,
    model: "",
    frequency: "",
    maximum_circuit_voltage: 0,
    quantity: 0,
    minimal_circuit_current: 0,
    phase_number: 0,
    tension: 0,
    type: ""
  }

  public calculateStock(): number {
    var stock: any = 0
    for (let i = 0; i < this.inverterList.length; i++) {
      stock += this.inverterList[i].quantity
    }
    return (stock * 100) / this.maxStock;
  }

  public getInverters(): void {
    this.inverterService.getInverters().subscribe({
      next: (res) => this.inverterList = res,
      error: (err) => console.log(err)
    })
  }

  public addInverter(): void {
    this.inverterService.addInverter({
      body: this.inverter
    }).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err)
    })
  }

  public updateInverter(): void {
    this.inverterService.updateInverter({
      body: this.inverter
    }).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err)
    })
  }

  public selectInverter(inverter: Inverter): void {
    this.inverter = inverter
  }

  public clearInverter(): void {
    this.inverter = {
      id: 0,
      image: "",
      nominal_power: 0,
      price: 0,
      model: "",
      frequency: "",
      maximum_circuit_voltage: 0,
      quantity: 0,
      minimal_circuit_current: 0,
      phase_number: 0,
      tension: 0,
      type: ""
    }
  }

  public addQuantity(inverter: Inverter): void {
    this.inverter = inverter
    this.inverter.quantity += this.quantity
    this.updateInverter()
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
      this.inverter.image = reader.result as string;
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  ngAfterViewInit() {
    this.getInverters()
  }
}
