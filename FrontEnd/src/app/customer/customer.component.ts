import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {CustomerControllerService} from "../services/services/customer-controller.service";
import {Customer} from "../services/models/customer";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements AfterViewInit {


  constructor(private customerService: CustomerControllerService) {
  }

  customerList: Array<Customer> = []
  customer : Customer = {
    id : 0,
    generaleInfo : {
      firstName : "",
      lastName : "",
      age : 0,
      address : ""
    },
    phone : "",
    email : "",
    constructions : []
  }

  posts : any = [];
  displayedColumns: string[] = ['nom', 'prenom', 'age' , 'telephone' , 'adresse' , 'email' , 'action'];
  dataSource = new MatTableDataSource<any>(this.customerList);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort
  public getCustomers(): void {
    this.customerService.getCustomers().subscribe({
      next:(res)=>{
        this.posts = res;
        this.dataSource = new MatTableDataSource(this.posts);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
      }
    )
  }

  public addCustomer():void{
    this.customerService.addCustomer(
      {body : this.customer}
    ).subscribe({
      next:(res)=>console.log(res),
      error:(err)=>console.log(err)
    })
  }

  public updateCustomer():void{
    this.customerService.updateCustomer(
      {body : this.customer}
    ).subscribe({
      next:(res)=>console.log(res),
      error:(err)=>console.log(err)
    })
  }

  public deleteCustomer():void{
    this.customerService.deleteCustomer(
      {id : this.customer.id}
    ).subscribe({
      next:(res)=>console.log(res),
      error:(err)=>console.log(err)
    })
  }

  selectCustomer(customer : Customer){
    this.customer = customer
  }

  clearCustomer(){
    this.customer = {
      id : 0,
      generaleInfo : {
        firstName : "",
        lastName : "",
        age : 0,
        address : ""
      },
      phone : "",
      email : "",
      constructions : []
    }
  }



  ngAfterViewInit() {
    this.getCustomers()
  }
}
