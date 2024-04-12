import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-my-application',
  templateUrl: './my-application.component.html',
  styleUrls: ['./my-application.component.css']
})
export class MyApplicationComponent implements OnInit{

  constructor() {}

  loader : Boolean = true
  ngOnInit() {

    setTimeout(()=>{
      this.loader = false;
    }, 2000);
  }
}
