import {Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {scheduler} from "dhtmlx-scheduler";
import {PlanifierService} from "../planifier.service";

@Component({
  encapsulation : ViewEncapsulation.None,
  selector: 'app-planifier-technicien',
  templateUrl: './planifier-technicien.component.html',
  styleUrls: ['./planifier-technicien.component.css'],
  providers : [PlanifierService]
})
export class PlanifierTechnicienComponent implements OnInit{


  constructor(private service: PlanifierService) {}
  @ViewChild("scheduler_here", {static: true}) schedulerContainer !: ElementRef;

  ngOnInit() {
    scheduler.config.date_format = "%Y-%m-%d %H:%i";
    scheduler.config.readonly = true;
    scheduler.init(this.schedulerContainer.nativeElement, new Date());
    this.service.afficher_planification(7).subscribe(
      res=>{
        scheduler.parse(res)
      },err=>{
        console.log(err)
      }
    )
  }
}

