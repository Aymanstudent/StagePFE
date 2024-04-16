import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {DevisControllerService} from "../services/services/devis-controller.service";
import {Devis} from "../services/models/devis";
import {DevisRequestControllerService} from "../services/services/devis-request-controller.service";
import {DevisRequest} from "../services/models/devis-request";
import {Router} from "@angular/router";
import {MailSendService} from "../services/mailSendService/mail-send.service";
import {SharedDataService} from "../services/sharedData/shared-data.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-devis',
  templateUrl: './devis.component.html',
  styleUrls: ['./devis.component.css']
})
export class DevisComponent implements AfterViewInit {

  constructor(private devisService: DevisControllerService,
              private devisRequestService: DevisRequestControllerService,
              private sharedDataService: SharedDataService,
              private emailService: MailSendService,
              private router: Router,
              private http: HttpClient) {
  }
  acceptDevisRequestLink : string = ` http://localhost:4200/devis/accept/`
  messageDevis : string ="Bonjour c'est une devis photovoltaic si vous devez l'accepter cliquer sur cette lien ";
  mailLinkRequest = "http://localhost:8080/mail/send"
  EmailSentMessage: string = ""
  emailSended = false
  customerEmail: any = {
    attachment: "",
    to: "",
    body: "",
    subject: ""
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

  devisList: any = []
  displayedColumns: string[] = ['date', 'ref', 'status', 'total', 'action'];
  dataSource = new MatTableDataSource<any>(this.devisList);
  posts: any
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort

  public getDevis(): void {
    this.devisService.getDevis().subscribe(
      res => {
        this.posts = res
        this.dataSource = new MatTableDataSource(this.posts)
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    )
  }

  public refresh():void{
    this.getDevis()
  }

  public updateDevis(): void {
    this.devisService.updateDevis(
      {body: this.devis}
    ).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err)
    })
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
    this.refresh()
  }

  public getDevisRequestById(devis: Devis): void {
    this.devis.id = devis.id;
    this.devis.ref = devis.ref;
    this.devis.status = devis.status;
    this.devis.devisRequest.id = String(devis.devisRequest)
    this.devis.etat = devis.etat;
    this.devis.cable = devis.cable;
    this.devis.solarPanel = devis.solarPanel;
    this.devis.battery = devis.battery;
    this.devis.systemFixing = devis.systemFixing;
    this.devis.inverter = devis.inverter;
    this.devis.meter = devis.meter;
    this.devis.total = devis.total;
    this.devisRequestService.getDevisRequestById({
      id: devis.devisRequest
    }).subscribe({
      next: (res) => {
        this.devisRequest = res;
      },
      error: (err) =>
        console.log(err)
    })
  }

  public selectDevis(devis: Devis): void {
    this.devis = devis
  }

  public navigateToAddNewConstruction(devis: any): void {
    this.sharedDataService.devisId = devis.id;
    this.sharedDataService.devisRequestId = devis.devisRequest
    this.router.navigate(['photovoltaique/constructor/add'])
  }

  public formatDate(dateString: string): string {
    const date = new Date(dateString);
    const year = date.getFullYear().toString().padStart(4, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${day}/${month}/${year}`;
  }

  public changeFile(event: any): void {
    this.acceptDevisRequestLink += this.devis.id
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append('attachment', file);
      formData.append('to', this.devisRequest.potential_customer.email)
      formData.append('subject', "Eco Solaire Devis Photovoltaique")
      formData.append('body', this.messageDevis + this.acceptDevisRequestLink)
      this.customerEmail = formData
    }


  }


  public sendEmailToCustomer(): void {
    this.http.post(this.mailLinkRequest, this.customerEmail).subscribe({
      error: (err) => {
        if (err.status === 200) {
          this.devis.status = "en attente"
          this.updateDevis();
          this.EmailSentMessage = err.error.text;
          this.emailSended = true
          setTimeout(() => {
            this.emailSended = false;
          }, 3000);
        }
      }
    })


  }

  applyFilter() {
    const filterValue = (event?.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase()

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage()
    }
  }


  ngAfterViewInit() {
    this.getDevis();
  }
}
