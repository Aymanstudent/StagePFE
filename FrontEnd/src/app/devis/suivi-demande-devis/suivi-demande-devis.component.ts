import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {DevisService} from "../devis.service";
import {Router} from "@angular/router";
import {MatSort} from "@angular/material/sort";
@Component({
  selector: 'app-suivi-demande-devis',
  templateUrl: './suivi-demande-devis.component.html',
  styleUrls: ['./suivi-demande-devis.component.css']
})
export class SuiviDemandeDevisComponent implements OnInit{
  constructor(public service : DevisService, public router : Router) {}

  demande : any =  {
    id : "",
    clientPotentiel : {
      nom :  "",
      prenom : "",
      email : "",
      telephone : ""
    },
    emplacement : "",
    code_Postal : "",
    batiment_type : "",
    surface_disponible : "",
    toiture_type : "",
    access_elec : null,
    consommation : null,
    status : "en attente"
  }
  Id : any
  Toitures : string[]  = ["Toiture cintrée en berceau" ,
    "Toiture à 3 pans" , "Toiture à 4 pans" , "Toiture cintrée à simple courbure concave" ,
    "Toiture à demi-croupe normande" , "Toiture à demi-croupe, croupe champenoise" ,
    "Toiture à demi-croupe débordante" , "Toiture à demi-croupe" , "Toiture pavillon" ,
    "Toiture papillon" , "Toiture en L" , "Toiture à 2 pans ou 2 versants" , "Toiture en T" , "Toiture à double courbure" ,
    "Toit monopente, à pupitre ou en appentis" , "Toiture shed, à redans partiels ou en dents de scie" , "Toiture à la Mansart avec terrasson, brisis et ligne de bris",
    "Toiture à coyers ou coyaux" , "Tourelle conique à base circulaire" , "Tourelle à pans à base hexagonale" , "Toiture en dôme ou coupole"]
  Batiments : string[] = ["industrielle spécialisée" , "résidentiel" , "commercial et institutionnel"]
  demande_devis : any = []
  displayedColumns: string[] = ['emplacement','code_postal','toiture_type','batiment_type','consommation','status','action'];
  dataSource = new MatTableDataSource<any>(this.demande_devis);
  posts :any
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort
  ngOnInit() {
    this.service.afficher_demande().subscribe(
      res=>{
        this.posts = res
        this.dataSource = new MatTableDataSource(this.posts)
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

      },
      error => {
        console.log(error)
      }
    )
  }

  applyFilter(){
    const filterValue = (event?.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase()

    if( this.dataSource.paginator ){
      this.dataSource.paginator.firstPage()
    }
  }

  ajouter_demande(){
    this.service.ajouter_demande(this.demande).subscribe(
      err=>{
        console.log(err)
      }
    )
    location.reload()
  }

  affecter_ligne(obj : any){
    this.demande = obj
  }

  effacer(){
    this.demande = {
      id : "",
      clientPotentiel : {
        nom :  "",
        prenom : "",
        email : "",
        telephone : ""
      },
      emplacement : "",
      code_Postal : "",
      batiment_type : "",
      surface_disponible : "",
      toiture_type : "",
      access_elec : null,
      consommation : null,
      status : "en attente"
    }
  }

  supprimerDemande(){
    this.service.supprimerDemande(this.demande.id).subscribe(
      error=>{
        console.log(error)
      }
    )
    location.reload();
  }

  modifier_demande(){
    this.service.modifierDemande(this.demande).subscribe(
      err=>{
        console.log(err)
      }
    )
  }

  creerDevis(demande : any){
    this.service.demande = demande
    this.router.navigateByUrl("photovoltaique/devis/cree")
  }


}

