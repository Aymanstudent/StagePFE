import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {DevisRequestControllerService} from "../services/services/devis-request-controller.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {DevisRequest} from "../services/models/devis-request";
import {SharedDataService} from "../services/sharedData/shared-data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-devis-request',
  templateUrl: './devis-request.component.html',
  styleUrls: ['./devis-request.component.css']
})
export class DevisRequestComponent implements OnInit {
  constructor(private devisRequestService: DevisRequestControllerService, private sharedDataService: SharedDataService, private router: Router) {
  }

  devisRequest: DevisRequest = {
    id: 0,
    available_area: 0,
    building_type: "",
    consumption: 0,
    status: "",
    electricity_access: false,
    location: "",
    post_code: "",
    potential_customer: {
      firstName: "",
      lastName: "",
      email: "",
      phone: ""
    },
    roof_type: ""
  }
  devisRequests: any = []

  roofs: string[] = ["Toiture cintrée en berceau",
    "Toiture à 3 pans", "Toiture à 4 pans", "Toiture cintrée à simple courbure concave",
    "Toiture à demi-croupe normande", "Toiture à demi-croupe, croupe champenoise",
    "Toiture à demi-croupe débordante", "Toiture à demi-croupe", "Toiture pavillon",
    "Toiture papillon", "Toiture en L", "Toiture à 2 pans ou 2 versants", "Toiture en T", "Toiture à double courbure",
    "Toit monopente, à pupitre ou en appentis", "Toiture shed, à redans partiels ou en dents de scie", "Toiture à la Mansart avec terrasson, brisis et ligne de bris",
    "Toiture à coyers ou coyaux", "Tourelle conique à base circulaire", "Tourelle à pans à base hexagonale", "Toiture en dôme ou coupole"]
  buildings: string[] = ["industrielle spécialisée",
    "résidentiel", "commercial et institutionnel"]

  public getDevisRequests(): void {
    this.devisRequestService.getDevisRequests().subscribe(
      res => {
        this.posts = res
        this.dataSource = new MatTableDataSource(this.posts)
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }, err => {
        console.log(err)
      }
    )
  }

  public addDevisRequest(): void {
    this.devisRequestService.addDevisRequest({
      body: this.devisRequest
    }).subscribe(
      res => {
        console.log(res)
      }, err => {
        console.log(err)
      }
    )
  }

  public udapteDevisRequest(): void {
    this.devisRequestService.updateDevisRequest({
      body: this.devisRequest
    }).subscribe(
      res => {
        console.log(res)
      }, err => {
        console.log(err)
      }
    )
  }

  public deleteDevisRequest(): void {
    this.devisRequestService.deleteDevisRequestById({
      id: this.devisRequest.id
    }).subscribe(
      res => {
        console.log(res)
      }, err => {
        console.log(err)
      }
    )
  }

  public applyFilter(): void {
    const filterValue = (event?.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase()

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage()
    }
  }

  clearDevisRequest() {
    this.devisRequest = {
      id: 0,
      available_area: 0,
      building_type: "",
      consumption: 0,
      status: "",
      electricity_access: false,
      location: "",
      post_code: "",
      potential_customer: {
        firstName: "",
        lastName: "",
        email: "",
        phone: ""
      },
      roof_type: ""
    }
  }

  public selectDevisRequest(devisRequest: DevisRequest): void {
    this.devisRequest = devisRequest;
  }

  public createDevis(devisRequest: DevisRequest): void {
    this.sharedDataService.devisRequest = devisRequest
    this.router.navigate(['photovoltaique/devis/add'])
  }

  displayedColumns: string[] = ['emplacement', 'code_postal', 'toiture_type', 'batiment_type', 'consommation', 'action'];
  dataSource = new MatTableDataSource<any>(this.devisRequests);
  posts: any
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort

  ngOnInit() {
    this.getDevisRequests()
  }
}
