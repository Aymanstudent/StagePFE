import {Component, OnInit} from '@angular/core';
import {Worker} from "../services/models/worker";
import {WorkerControllerService} from "../services/services/worker-controller.service";

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css']
})
export class WorkerComponent implements OnInit {

  constructor(private workerService: WorkerControllerService) {
  }

  workers: any = []
  worker: Worker = {
    id: 0,
    generaleInfo: {
      firstName: "",
      lastName: "",
      age: 0,
      address: ""
    },
    email: "",
    phone: "",
    activities: [],
    profession: "",
    image: ""
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const base64String = reader.result as string;
      this.worker.image = base64String;
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  getImageUrl(base64String: string | null): string {
    return base64String ? `${base64String}` : ''; // Handle missing image
  }

  selectWorker(worker : Worker){
    this.worker = worker
  }

  public getWorkers(): void {
    this.workerService.getWorkers().subscribe(
      res => {
        this.workers = res
      }, err => {
        console.log(err)
      }
    )
  }

  public addWorker(): void {
    this.workerService.addWorker({
      body: this.worker
    }).subscribe(
      res => {
        console.log(res)
      }, err => {
        console.log(err)
      }
    )
  }


  public updateWorker(): void {
    this.workerService.updateWorker({
      body: this.worker
    }).subscribe(
      res => {
        console.log(res)
      }, err => {
        console.log(err)
      }
    )
  }

  public deleteWorker(): void {
    this.workerService.deleteWorker({
      id: this.worker.id
    }).subscribe(
      res => {
        console.log(res)
      }, err => {
        console.log(err)
      }
    )
  }


  ngOnInit() {
    this.getWorkers()
  }

}
