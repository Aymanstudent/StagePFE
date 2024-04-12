import {Component, OnInit, ViewChild} from '@angular/core';
import {DevisService} from "../devis.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {Chantier} from "../../models/chantier";
import {devis} from "../../models/devis";
import {email} from "../../models/email";
@Component({
  selector: 'app-suivi-devis',
  templateUrl: './suivi-devis.component.html',
  styleUrls: ['./suivi-devis.component.css']
})
export class SuiviDevisComponent  implements OnInit{

  constructor(public service : DevisService) {}
  File : any
  demande_devis : any = {
    id : "", emplacement : "",
    clientPotentiel : { nom : "" , prenom : "",  age : 0 , sexe : "" , email : "" , telephone : ""},
    status : "",
    access_elec : false,
    batiment_type : "",
    code_postal : "",
    consommation : 0,
    surface_disponible : 0,
    toiture_type : ""
  }
  email : email  = {to : "", subject : "Devis Photovoltaique", body:  "J'espère que vous allez bien. Je vous remercie pour votre confiance et l'opportunité de travailler ensemble sur ce projet. Suite à nos discussions et à l'analyse de vos besoins, j'ai le plaisir de vous envoyer le devis correspondant à notre proposition. Vous y trouverez un récapitulatif détaillé des services que nous prévoyons de fournir, ainsi que les coûts associés. N'hésitez pas à me faire part de vos commentaires ou de toute question que vous pourriez avoir.\n" +
      "\n" +
      "Je reste à votre entière disposition pour discuter de ce devis et pour apporter d'éventuelles modifications selon vos exigences. Votre satisfaction est notre priorité absolue, et nous sommes déterminés à vous fournir un service de haute qualité.\n" +
      "\n" +
      "Je vous remercie encore une fois pour cette opportunité et j'attends avec impatience votre retour.", attchement : null}


  mon_devis : devis = {
    id : "", date : "", ref : "",
    panneauSolaire : {modelePanneau : "", quantitePanneau : 0, prixPanneau  : 0, tvaPanneau : 0, totalPanneau : 0},
    onduleur : {modeleOnduleur : "", quantiteOnduleur : 0, prixOnduleur  : 0, tvaOnduleur : 0, totalOnduleur : 0},
    systemeFixation : {modeleSysFixation : "", quantiteSysFixation : 0, prixSysFixation  : 0, tvaSysFixation : 0, totalSysFixation : 0},
    cable : {modeleCable: "", quantiteCable : 0, prixCable  : 0, tvaCable : 0, totalCable : 0},
    compteur : {modeleCompteur: "", quantiteCompteur : 0, prixCompteur  : 0, tvaCompteur : 0, totalCompteur : 0},
    batteri : {modeleBatteri: "", quantiteBatteri : 0, prixBatteri  : 0, tvaBatteri : 0, totalBatteri : 0},
    total : 0, status : "", etat : ""
  }




  devis : any = []
  displayedColumns: string[] = ['date','ref','status','etat','action'];
  dataSource = new MatTableDataSource<any>(this.devis);
  posts :any
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort
  ngOnInit() {
    // afficher tout les devis
    this.service.afficher_devis().subscribe(
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

  //fonction pour supprimer une devis par son Id
  public supprimer_devis() : void{
    this.service.supprimer_devis(this.mon_devis.id).subscribe(
      err=>{
        console.log(err)
      }
    )
    location.reload()
  }

  //fontction pour selectionner une devis spécifique de la table
  public affecter_ligne(obj : any) : void{
    this.mon_devis = obj
  }
  //fonction pour crée une formData pour envoier une email
  public changeFile(event : any) : void{
    debugger;
    if(event.target.files.length > 0){
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append('to', this.email.to)
      formData.append('subject', this.email.subject)
      formData.append('body', this.email.body)
      formData.append('attchement', file);
      this.File = formData
      debugger;
    }
  }

  client : any = { id : "", personne : { nom : "", prenom : "", age : "", sexe : "",  telephone : "", email : "", adresse: ""} }

  //fonction pour retirer une demandeDevis de mon base avec une devis Id
  public afficher_demande(devis : any) : void{
    this.service.afficher_demandeDevis_parDevis(devis.demandeDevis).subscribe(
      res=>{
        this.demande_devis = res;
        this.email.to = this.demande_devis.clientPotentiel.email
      }, err=>{console.log(err)}
    )
    this.affecter_ligne(devis)
    this.chantier.devis.id = devis.id.toString()
    this.client.personne.nom = this.demande_devis.clientPotentiel.nom
    this.client.personne.prenom = this.demande_devis.clientPotentiel.prenom
    this.client.personne.age = this.demande_devis.clientPotentiel.age
    this.client.personne.sexe = this.demande_devis.clientPotentiel.sexe
    this.client.personne.email = this.demande_devis.clientPotentiel.email
    this.client.personne.telephone = this.demande_devis.clientPotentiel.telephone
  }


  //fonction pour ajouter un client
  public ajouterCLient(client :any) : void{
    this.service.ajouterCLient(client).subscribe(res=>{
      this.client = res;
      this.chantier.client.id = this.client.id.toString()
    }, err=>{console.log(err);});
  }

  chantier : Chantier = { id : "", emplacement : "", description : "", devis : {id : ""}, client : {id : ""} }

  //fonction pour ajouter une chantier si le devis est accepter par le client
  public ajouterChantier() : void{
    this.ajouterCLient(this.client);
    setTimeout(() => {
      this.service.ajouter_chantier(this.chantier).subscribe();
    }, 1000);
    console.log(this.chantier)
  }

  envoi_devis(){
    this.service.envoierMail(this.File).subscribe(
      err=>{
        console.log(err)
      }
    )
    this.mon_devis.status = "envoier"
    this.service.modifier_devis(this.mon_devis).subscribe(
      res=>{console.log(res)},err=>{console.log(err)}
    )
  }

}
