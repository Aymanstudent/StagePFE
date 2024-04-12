import {Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {PlanifierService} from "../planifier.service";
import {scheduler} from "dhtmlx-scheduler";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {HttpClient} from "@angular/common/http";

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-planifier-chantier',
  templateUrl: './planifier-chantier.component.html',
  styleUrls: ['./planifier-chantier.component.css']
})
export class PlanifierChantierComponent implements OnInit{
  constructor(private service: PlanifierService, public bootstrap : NgbModal) {}
  @ViewChild("scheduler_here", {static: true}) schedulerContainer !: ElementRef;
  sections : any = []
  vehicule_sections : any =  []
  chantier_sections : any = []
  ouvrier_section : any = []
  tache_section:any = []
  ouvriers:any = []
  vehicules:any = []
  ouvrier : any
  vehicule : any
  evenement : any = {
    id : "",
    start_date : "",
    end_date : "",
    text : "",
    chantiers : [],
    ouvriers : [],
    taches : []
  }
  ngOnInit() {
    this.service.afficher_tout_panification().subscribe(
      res => {
        scheduler.parse(res)
      }, err => {
        console.log(err)
      }
    )
    this.service.afficher_vehicules().subscribe(
      res => {
        this.vehicule_sections = res
      }, err => {
        console.log(err)
      }
    )

    this.service.afficher_chantiers().subscribe(
      res => {
        this.chantier_sections = res
      },err => {
        console.log(err)
      }
    )

    this.service.afficher_ouvriers().subscribe(
      res => {
        this.ouvrier_section = res
      },err=>{
        console.log(err)
      }
    )

    this.service.afficher_taches().subscribe(
      res => {this.tache_section = res},
      err => {console.log(err)}
    )

    scheduler.config.date_format = "%Y-%m-%d %H:%i";
    scheduler.init(this.schedulerContainer.nativeElement, new Date());
    var custom_form : any = document.getElementById("custom_form");

    scheduler.showLightbox = function(id){
      var ev = scheduler.getEvent(id);
      scheduler.startLightbox(id, custom_form );
      (<HTMLInputElement>document.querySelector("#chantier")).value = ev.chantier;
    }



    scheduler.attachEvent("onEventChanged", function(id, service:PlanifierService, Http : HttpClient) {
      // Similar logic as onEventDrag
      var event = scheduler.getEvent(id);
      var evenement : any = {
        id : event.id,
        start_date : event.start_date,
        end_date : event.end_date,
        text : event.text
      }

      scheduler.updateEvent(event.id);
      fetch('http://localhost:8080/jour_travailler/modifier', {
        method: 'PUT', // Specify the PUT method
        headers: {
          'Content-Type': 'application/json' // Optional header for JSON data
        },
        body: JSON.stringify(evenement) // Data to send in the request body
      })
        .then(response => response.json()) // Parse the response as JSON
        .then(data => {
          console.log(data); // Do something with the response data
        })
        .catch(error => {
          console.error(error); // Handle errors
        });
      return true;
    });

    scheduler.attachEvent("onEventDeleted", function(id, ev){
      fetch('http://localhost:8080/jour_travailler/supprimer/' + id, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
      })
        .then(response => {
          if (!response.ok) {
            console.error("Error deleting event:", response.statusText);
          } else {
            console.log("Event deleted successfully!");
          }
        })
        .catch(error => {
          console.error("Error deleting event:", error);
        });
      console.log("Event with ID", id, "was deleted.");
    });
  }
  custom_form : any = document.getElementById("custom_form");
  save_form() {
    var ev = scheduler.getEvent(scheduler.getState().lightbox_id);
    //ev.text = document.getElementById("some_input").value;
    ev.text = `<br>` + (<HTMLInputElement>document.querySelector("#chantier")).value;
    this.evenement.start_date = ev.start_date;
    this.evenement.end_date = ev.end_date;
    this.evenement.text = ev.text;
    this.service.ajouter_EvenementChantier(this.evenement).subscribe(err=>{console.log(err)})
    scheduler.endLightbox(true, this.custom_form);
  }

  close_form() {
    scheduler.endLightbox(false, this.custom_form);
  }
  affecterOuvrier(event:any){
    this.ouvrier = event.target.value
  }
  affecterVehicule(event:any){
    this.vehicule = event.target.value
  }
  affecterTache(event : any,tache : any){
    if(event.target.checked){
      let i = 0
      let trouver = false
      while ( i < this.evenement.taches.length && !trouver){
        if (this.evenement.taches[i].id == tache.id){
          trouver = true
          break
        }
        i++
      }
      if (!trouver){
        this.evenement.taches.push({id : tache.id})
        console.log(this.evenement)
      }
    }
    else{
      let i = 0
      let trouver  = false
      while( i < this.evenement.taches.length && !trouver){
        if (this.evenement.taches[i].id == tache.id){
          trouver = true
          break
        }
        i++
      }
      if (trouver){
        this.evenement.taches.splice(i, 1)
      }
    }
  }
  ajouterOuvrier(){
    let ouvrier : any = { id : this.ouvrier }
    this.evenement.ouvriers.push(ouvrier)
    console.log(this.evenement)
  }

  ajouterTaches(){

  }

}
