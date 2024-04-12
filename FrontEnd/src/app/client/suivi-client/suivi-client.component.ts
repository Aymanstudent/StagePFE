import {Component, OnInit, ViewChild} from '@angular/core';
import {ClientService} from "../client.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
@Component({
  selector: 'app-suivi-client',
  templateUrl: './suivi-client.component.html',
  styleUrls: ['./suivi-client.component.css']
})
export class SuiviClientComponent implements OnInit{
  constructor(public service : ClientService) {}
  client :any = {
    id : "",
    personne : {
      nom : "",
      prenom : "",
      age : null,
      sexe : "",
      adresse : "",
      email : "",
      telephone : ""
    }
  }
  clients : any = [];
  posts : any = [];
  displayedColumns: string[] = ['nom', 'prenom', 'age', 'sexe' , 'telephone' , 'adresse' , 'email' , 'action'];
  dataSource = new MatTableDataSource<any>(this.clients);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort

  ngOnInit() {
    this.service.afficher_tout().subscribe(
      res=>{
        this.posts = res;
        this.dataSource = new MatTableDataSource(this.posts);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

      },
      err=>{
        console.log(err);
      }
    )
  }

  ajouter_client(){
    this.service.ajouter_client(this.client).subscribe(
      err=>{
        console.log(err);
      }
    )
    location.reload();
  }

  modifier_client(){
    this.service.modifier_client(this.client).subscribe(
      err=>{
        console.log(err);
      }
    )
    location.reload();
  }

  supprimer_client(){
    this.service.supprimer_client(this.client.id).subscribe(
      err=>{
        console.log(err);
      }
    )
    location.reload();
  }

  afficher_client(obj : any){
    this.client = obj;
  }

  effacer(){
    this.client = {
      id : "",
      personne : {
        nom : "",
        prenom : "",
        age : null,
        sexe : "",
        adresse : "",
        email : "",
        telephone : ""
      }
    }
  }

}
