import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-l-company',
  templateUrl: './l-company.component.html',
  styleUrl: './l-company.component.css'
})
export class LCompanyComponent implements OnInit {
  compId:any
 constructor(private Ls:CompanyService){
  
 }

 isvendor:Boolean=false;
 isvalue:Boolean=false;

 _companyList:any;
 

 ngOnInit(): void {
  this.Ls.list().subscribe((res)=>{
    this._companyList=res;
    console.log(res)
  })
}
close(cup:Boolean){
  this.isvendor=cup
}
closeval(cup:Boolean){
  this.isvalue=cup
}

viewCompany(data:any){
// console.log(data);
this.compId =data 
this.isvalue=true

}
deleteCompany(index: number) {
  this._companyList.splice(index, 1);
}
}

