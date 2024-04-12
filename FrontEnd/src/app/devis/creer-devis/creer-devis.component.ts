import {Component, OnInit} from '@angular/core';
import {DevisService} from "../devis.service";
import {formatDate, getLocaleDateFormat} from "@angular/common";
import {Router} from "@angular/router";
@Component({
  selector: 'app-creer-devis',
  templateUrl: './creer-devis.component.html',
  styleUrls: ['./creer-devis.component.css']
})

export class CreerDevisComponent implements OnInit{
  constructor(public service : DevisService, private route: Router) {}


  devis : any = {
    ref : "",
    date : "",
    status : "en attente",
    etat : "en attente",
    panneauSolaire : {
      modelePanneau : "",
      quantitePanneau : 0,
      prixPanneau  : 0,
      tvaPanneau : 0,
      totalPanneau : 0
    },
    onduleur : {
      modeleOnduleur : "",
      quantiteOnduleur : 0,
      prixOnduleur  : 0,
      tvaOnduleur : 0,
      totalOnduleur : 0
    },
    systemeFixation : {
      modeleSysFixation : "",
      quantiteSysFixation : 0,
      prixSysFixation  : 0,
      tvaSysFixation : 0,
      totalSysFixation : 0
    },
    cable : {
      modeleCable: "",
      quantiteCable : 0,
      prixCable  : 0,
      tvaCable : 0,
      totalCable : 0
    },
    compteur : {
      modeleCompteur: "",
      quantiteCompteur : 0,
      prixCompteur  : 0,
      tvaCompteur : 0,
      totalCompteur : 0
    },
    batteri : {
      modeleBatteri: "",
      quantiteBatteri : 0,
      prixBatteri  : 0,
      tvaBatteri : 0,
      totalBatteri : 0
    },
    total : 0,
    demandeDevis : {id : ""}
  }
  TVA = [0,6,10,15]

  generate_ref(){
    let x = Math.floor(Math.random() * 100)
    let y = Math.floor(Math.random() * 10)
    let z = Math.floor(Math.random() * 999)
    return "ref_" + x * y + z
  }

  generate_date(){
    return formatDate(new Date(), 'yyyy-MM-dd', 'en');
  }
  // les Lists des matéraiux
  List_PanneauxSlaire : any = []
  List_Onduleur : any = []
  List_SystemeFixation : any = []
  List_cables : any = []
  List_batteries : any = []
  List_compteurs : any = []

  // les matériaux

  //Les totals des matériaux
  TotalPanneauSolaire = 0
  TotalOnduleur = 0
  TotalSystemeFixation = 0
  TotalCable = 0
  TotalBatteri = 0
  TotalCompteur = 0
  TotalMateriaux = 0
  CalculateTotalPanneau(){this.TotalPanneauSolaire =  (this.devis.panneauSolaire.quantitePanneau * this.devis.panneauSolaire.prixPanneau) + ((this.devis.panneauSolaire.quantitePanneau * this.devis.panneauSolaire.prixPanneau) * this.devis.panneauSolaire.tvaPanneau / 100)}

  CalculateTotalOnduleur(){this.TotalOnduleur = (this.devis.onduleur.quantiteOnduleur * this.devis.onduleur.prixOnduleur) + ((this.devis.onduleur.quantiteOnduleur * this.devis.onduleur.prixOnduleur) * this.devis.onduleur.tvaOnduleur / 100)}

  CalculateTotalSystemeFixation(){this.TotalSystemeFixation = (this.devis.systemeFixation.quantiteSysFixation * this.devis.systemeFixation.prixSysFixation) + ((this.devis.systemeFixation.quantiteSysFixation * this.devis.systemeFixation.prixSysFixation) * this.devis.systemeFixation.tvaSysFixation / 100)}

  CalculateTotalCable(){this.TotalCable = (this.devis.cable.quantiteCable * this.devis.cable.prixCable) + ((this.devis.cable.quantiteCable * this.devis.cable.prixCable) * this.devis.cable.tvaCable / 100)}

  CalculateTotalBatterie(){this.TotalBatteri = (this.devis.batteri.quantiteBatteri * this.devis.batteri.prixBatteri) + ((this.devis.batteri.quantiteBatteri * this.devis.batteri.prixBatteri) * this.devis.batteri.tvaBatteri / 100)}

  CalculateTotalCompteur(){this.TotalCompteur = (this.devis.compteur.quantiteCompteur * this.devis.compteur.prixCompteur) + ((this.devis.compteur.quantiteCompteur * this.devis.compteur.prixCompteur) * this.devis.compteur.tvaCompteur / 100)}

  CalculateTotalMateriaux(){this.TotalMateriaux = this.TotalOnduleur + this.TotalCompteur + this.TotalCable + this.TotalSystemeFixation + this.TotalPanneauSolaire + this.TotalBatteri}


  //Les méthode pour affecter le TVA
  TvaPanneauSolaire(e:any){this.devis.panneauSolaire.tvaPanneau = e.target.value}
  TvaOnduleur(e:any){this.devis.onduleur.tvaOnduleur = e.target.value}
  TvaSystemeFixation(e:any){this.devis.systemeFixation.tvaSysFixation = e.target.value}
  TvaCable(e:any){this.devis.cable.tvaCable = e.target.value}
  TvaBatterie(e:any){this.devis.batteri.tvaBatteri = e.target.value}
  TvaCompteur(e:any){this.devis.compteur.tvaCompteur = e.target.value}

  //Les méthode pour ajouter le prix
  affecter_prix_panneau(e : any){
    this.devis.panneauSolaire.prixPanneau = e.target.value
  }
  affecter_prix_onduleur(e : any ){
    this.devis.onduleur.prixOnduleur = e.target.value
  }
  affecter_prix_systemeFixation(e : any){
    this.devis.systemeFixation.prixSysFixation = e.target.value
  }
  affecter_prix_cable(e : any){
    this.devis.cable.prixCable = e.target.value
  }
  affecter_prix_batterie(e : any){
    this.devis.batteri.prixBatteri = e.target.value
  }
  affecter_prix_compteur(e : any){
    this.devis.compteur.prixCompteur = e.target.value
  }
  afficher_panneauSolaires(){
    this.service.afficher_panneauSolaires().subscribe(
      res=>{
        this.List_PanneauxSlaire = res
      },
      err=>{
        console.log(err)
      }
    )
  }
  afficher_onduleurs(){
    this.service.afficher_onduleurs().subscribe(
      res=>{
        this.List_Onduleur = res
      },
      err=>{
        console.log(err)
      }
    )
  }

  afficher_systemeFixations(){
    this.service.afficher_systemeFixations().subscribe(
      res=>{
        this.List_SystemeFixation = res
      },
      err=>{
        console.log(err)
      }
    )
  }

  afficher_compteurs(){
    this.service.afficher_compteurs().subscribe(
      res=>{
        this.List_compteurs = res
      },
      err=>{
        console.log(err)
      }
    )
  }

  afficher_cables(){
    this.service.afficher_cables().subscribe(
      res=>{
        this.List_cables = res
      },
      err=>{
        console.log(err)
      }
    )
  }

  afficher_batteries(){
    this.service.afficher_batteries().subscribe(
      res=>{
        this.List_batteries = res
      },
      err=>{
        console.log(err)
      }
    )
  }


  ajouter_devis(){
    this.devis.ref = this.generate_ref()
    this.devis.date = this.generate_date()
    this.devis.total = this.TotalMateriaux
    this.devis.demandeDevis.id = this.service.demande.id.toString()
    console.log(this.devis)
    this.service.ajouter_devis(this.devis).subscribe(
      err=>{
        console.log(err)
      }
    )
    this.service.demande.status = "fait"
    this.service.modifierDemande(this.service.demande).subscribe(
      err=>{
        console.log(err)
      }
    )
    this.route.navigateByUrl("photovoltaique/devis/demande/suivi")
  }

  ngOnInit() {
    this.afficher_panneauSolaires()
    this.afficher_onduleurs()
    this.afficher_systemeFixations()
    this.afficher_cables()
    this.afficher_batteries()
    this.afficher_compteurs()
  }
}
