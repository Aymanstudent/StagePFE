import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {ChantierService} from "../chantier.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-suivi-chantier',
  templateUrl: './suivi-chantier.component.html',
  styleUrls: ['./suivi-chantier.component.css'],
})
export class SuiviChantierComponent implements OnInit{

  chantier = this.service.chantier
  avenants : any =[]
  materiaux : any = []
  factures : any = []
  facture : any
  constructor(public service:ChantierService) {}
  displayedColumns: string[] = ['date','reference','montant','status','action'];
  FactureDisplayedColumns : string[] = ['date', 'reference', 'total' , 'chantier' , 'action'];
  dataSource = new MatTableDataSource<any>(this.avenants);
  FactureDateSource = new MatTableDataSource<any>(this.factures);
  posts :any
  secoundPosts : any[] = []
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort
  ngOnInit() {
    const tabs: NodeListOf<Element> = document.querySelectorAll('[data-tab-target]');
    const tabContent: NodeListOf<Element> = document.querySelectorAll('[data-tab-content]');

    tabs.forEach((tab: Element) => {
      tab.addEventListener('click', () => {
        const target: Element | null = document.querySelector(tab.getAttribute('data-tab-target') as string);
        tabContent.forEach((tabContent: Element) => {
          tabContent.classList.remove('active');
        });
        tabs.forEach((tab:Element) =>{
          tab.classList.remove('focus')
        })
        tab?.classList.add('focus')
        target?.classList.add('active');
      });
    });
    this.afficher_avenants()
    this.afficher_facture()
    this.afficher_materiaux()
  }

  afficher_avenants(){
    this.service.afficher_avenants(this.service.chantier.id).subscribe(
      res=>{
        this.posts = res
        this.dataSource = new MatTableDataSource(this.posts)
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },err=>{console.log(err)}
    )
  }

  afficher_facture(){
    this.service.afficher_facture(this.service.chantier.id).subscribe(
      res=>{
        this.secoundPosts.push(res)
        this.FactureDateSource = new MatTableDataSource(this.posts)
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },err=>{console.log(err)}
    )
  }

  afficher_materiaux(){
    this.service.afficher_materiaux(this.chantier.devis).subscribe(
      res=>{
        this.materiaux = res
        console.log(res)
      }
    )
  }
}








