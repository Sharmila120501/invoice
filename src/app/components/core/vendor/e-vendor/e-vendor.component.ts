import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { VendorService } from '../../services/vendor.service';

@Component({
  selector: 'app-e-vendor',
  templateUrl: './e-vendor.component.html',
  styleUrl: './e-vendor.component.css'
})
export class EVendorComponent {

  
  @Output() priya  = new EventEmitter<Boolean>
  @Input() sId:any
 
editvendor: FormGroup;
constructor(private fb:FormBuilder, private co:VendorService){
  this.editvendor=this.fb.group({
    id:[],
    companyId:[],
    vendorId:[],
    vendorName:[],
    phoneNumber:[],
    email:[],
    companyName:[],
    gst:[],
    add1:[],
    add2:[],
    city:[],
    state:[],
    pinCode:[]

  })
}
_vendorDetails:any;
  ngOnInit() {
   console.log(this.sId);
   this.edit()
  }

  edit(){
    this.co.getid(this.sId).subscribe((res)=>{
      this._vendorDetails=res
      sessionStorage.setItem('vendorId',this._vendorDetails.id);
      this.editvendor.patchValue({
        id:this._vendorDetails.id,
        vendorId:this._vendorDetails.vendorId,
        companyId:this._vendorDetails.companyId,
        vendorName:this._vendorDetails.vendorName,
        phoneNumber:this._vendorDetails.phoneNumber,
        email:this._vendorDetails.email,
        companyName:this._vendorDetails.companyName,
        gst:this._vendorDetails.gst,
        add1:this._vendorDetails.add1,
        add2:this._vendorDetails.add2,
        city:this._vendorDetails.city,
        state:this._vendorDetails.state,
        pinCode:this._vendorDetails.pinCode

      })
    })
  }
  save(data:any){
    let id = sessionStorage.getItem('vendorId')
    console.log(id);
    this.co.update(id,data).subscribe((res)=>{
      console.log(res);
    },
    (error)=>{
      if(error.status==201)
  {
    console.log('success');
    this.editvendor.reset();
    
  }  }
    )
  }


}
