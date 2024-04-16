import {Component, OnInit, ViewChild} from '@angular/core';
import {SupplierControllerService} from "../services/services/supplier-controller.service";
import {Supplier} from "../services/models/supplier";
import {MatTable, MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit{

  constructor(private supplierService : SupplierControllerService) {}

  suppliers : any =[]
  supplier : Supplier = {
    id : 0,
    email : "",
    name : "",
    phone : ""
  }
  public addSupplier() :void {
    this.supplierService.addSupplier({
      body : this.supplier
    }).subscribe(
      res=>{
        console.log(res)
      },err=>{
        console.log(err)
      }
    )
  }

  public updateSupplier() :void {
    this.supplierService.updateSuplier({
      body : this.supplier
    }).subscribe(
      res=>{
        console.log(res)
      },err=>{
        console.log(err)
      }
    )
  }

  public deleteSupplier() :void {
    this.supplierService.deleteSupplier({
      id : this.supplier.id
    }).subscribe(
      res=>{
        console.log(res)
      },err=>{
        console.log(err)
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

  CleanSupplierObject(){
    this.supplier = {
      id : 0,
      email : "",
      name : "",
      phone : ""
    }
  }

  SelectSupplier(supplier : Supplier){
    this.supplier = supplier
  }

  displayedColumns: string[] = ['id', 'nom','telephone','email','action'];
  dataSource = new MatTableDataSource<any>(this.suppliers);
  posts :any
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort
  @ViewChild('table', { static: true,read:MatTable }) table !:MatTable<any>

  public getSuppliers() :void {
    this.supplierService.getSuppliers().subscribe(
      res=>{
        console.log(res)
        this.posts = res
        this.dataSource = new MatTableDataSource(this.posts)
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },err=>{
        console.log(err)
      }
    )
  }

  ngOnInit() {
    this.getSuppliers()
  }
}
