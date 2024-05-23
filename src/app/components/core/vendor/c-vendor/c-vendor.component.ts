import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { VendorService } from '../../services/vendor.service';

@Component({
  selector: 'app-c-vendor',
  templateUrl: './c-vendor.component.html',
  styleUrl: './c-vendor.component.css'
})
export class CVendorComponent {
  @Output() sharmi = new EventEmitter<boolean>


addVendorForm:FormGroup
balanceTypeControl: FormControl = new FormControl('');

constructor(private fb:FormBuilder, private addven:VendorService){
  this. addVendorForm=this.fb.group({
    companyId:[sessionStorage.getItem('companyId')],
    vendorName: ['', [Validators.required, Validators.pattern('[A-Za-z ]+')]],
    phoneNumber:['',  [Validators.required, Validators.pattern(/^\d{10}$/)]],
    email:['',  [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-z]+.([a-z]{2})+(?:\.(com|in|edu|net)){1}$/)]],
    companyName:['', [Validators.required, Validators.pattern('[A-Za-z ]+')]],
    gst:['',  [Validators.required, Validators.pattern(/^\d{2}[A-Z]{5}\d{4}[A-Z]{1}\d{1}[A-Z\d]{2}$/)]],
    add1:['',  [Validators.required, Validators.pattern('')]],
    add2:['',  [Validators.required, Validators.pattern('')]],
    city:['',  [Validators.required, Validators.pattern('[A-Za-z ]+')]],
    state:['',  [Validators.required, Validators.pattern('[A-Za-z ]+')]],
    pinCode:['',  [Validators.required, Validators.pattern(/^\d{6}/)]],
    // balanceType: this.balanceTypeControl,
    // debit:['',  [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
    // credit:['',  [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]]
  })

}
vendor(data:any){

  this.addven.add(data).subscribe((res)=>{
    console.log(res);  
  },
  (error)=>{
    if(error.status==201)
{
  console.log('success');
  this.addVendorForm.reset();
  
}  })

}

}
