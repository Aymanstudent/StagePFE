import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTable, MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {FournisseurService} from "../fournisseur.service";
import {Fournisseur} from "../../models/fournisseur";
@Component({
  selector: 'app-suivi-fournisseur',
  templateUrl: './suivi-fournisseur.component.html',
  styleUrls: ['./suivi-fournisseur.component.css']
})
export class SuiviFournisseurComponent implements OnInit{
  constructor(private service : FournisseurService) {}
  fournisseur : Fournisseur = {id : "", nom : "", telephone : "", email : ""}
  fournisseurs : any = []
  displayedColumns: string[] = ['id', 'nom','telephone','email','action'];
  dataSource = new MatTableDataSource<any>(this.fournisseurs);
  posts :any
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort
  @ViewChild('table', { static: true,read:MatTable }) table !:MatTable<any>
  ngOnInit() {
    this.service.afficherFournissuers().subscribe(
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

  public applyFilter() : void{
    const filterValue = (event?.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase()

    if( this.dataSource.paginator ){
      this.dataSource.paginator.firstPage()
    }
  }

  //Méthode pour sélectionner une ligne de table
  public selectionner(f : Fournisseur) : void{
    this.fournisseur = f
  }

  //Méthode pour mettre les attributs de fournisseur vide
  public effacer():  void{
    this.fournisseur = {id : "", nom : "", telephone : "", email : ""}
  }

  //Méthode pour ajouter un fournisseur
  public ajouterFournisseur() : void{
    this.service.ajouterFournisseur(this.fournisseur).subscribe(
      res=>{console.log(res)},err=>{console.log(err)}
    )
    location.reload()
  }

  //Méthode pour modifier un fournisseur
  public modifierFournisseur() : void{
    this.service.modifierFournisseur(this.fournisseur).subscribe(
      res=>{console.log(res)},err=>{console.log(err)}
    )
  }

  //Méthode pour supprimer un fournisseur
  public supprimerFournisseur() : void{
    this.service.supprimerFournisseur(this.fournisseur.id).subscribe(
      res=>{console.log(res)},err=>{console.log(err)}
    )
    location.reload()
  }
}
