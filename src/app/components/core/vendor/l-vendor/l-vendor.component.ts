import { Component, OnInit } from '@angular/core';
import { VendorService } from '../../services/vendor.service';

@Component({
  selector: 'app-l-vendor',
  templateUrl: './l-vendor.component.html',
  styleUrl: './l-vendor.component.css'
})
export class LVendorComponent implements OnInit {

  vendId:any
  currentDate: Date = new Date();
  currentTime: String =  new Date().toLocaleTimeString();
  constructor(private Ls:VendorService){
  
  }
isvendor:boolean=false;
isValue:Boolean=false;
_vendorList:any;

companyId:any;


cl(cu:Boolean){
  this.isValue=cu
}
ngOnInit(): void {
  // this.Ls.list().subscribe((res)=>{
  //   this._vendorList=res;
  //   console.log(res)
  this.companyId = sessionStorage.getItem('companyId');
    // Fetch and display bank details
    this.fetchVendorDetails();

    
}
close(cup:boolean){
  this.isvendor=cup
}
fetchVendorDetails() {
  // Fetch bank details based on company ID
  this.Ls.view(this.companyId).subscribe(
    (res: any) => {
      console.log(res);
      this._vendorList = res;
    },
    (error) => {
      console.error(error);
      // Handle error if needed
    }
  );
}
viewVendor(data:any){
  // console.log(data);
  this.vendId =data 
  this.isValue=true
  
  }
  deleteVendor(index: number) {
    this._vendorList.splice(index, 1);
  }
}
