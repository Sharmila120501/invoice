import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-c-company',
  templateUrl: './c-company.component.html',
  styleUrl: './c-company.component.css'
})
export class CCompanyComponent {

  @Output() sharmi =  new EventEmitter<Boolean>

  AddCompany:FormGroup;

constructor(private fb:FormBuilder, private co:CompanyService){
  this.AddCompany=this.fb.group({
    comName:['',[Validators.required, Validators.pattern('[A-Za-z ]+')]],
    phoneNumber:['',[Validators.required, Validators.pattern(/^\d{10}$/)]],
    email:['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-z]+.([a-z]{2})+(?:\.(com|in|edu|net)){1}$/)]],
    gst:['',[Validators.required, Validators.pattern(/^\d{2}[A-Z]{5}\d{4}[A-Z]{1}\d{1}[A-Z\d]{2}$/)]],
    add1:['',  [Validators.required, Validators.pattern('')]],
    add2:['', [Validators.required, Validators.pattern('')]],
    city:['', [Validators.required, Validators.pattern('[A-Za-z ]+')]],
    state:['', [Validators.required, Validators.pattern('[A-Za-z ]+')]],
    pinCode:['', [Validators.required, Validators.pattern(/^\d{6}$/)]],
    panNum:['',  [Validators.required, Validators.pattern(/^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/)]],
  })
}
company(data:any){

  this.co.add(data).subscribe((res)=>{
    console.log(res);
  // this.co.add(data).subscribe((res)=>{
  //   console.log(res);
    
  },
  (error)=>{
    if(error.status==201)
{
  console.log('success');
  this.AddCompany.reset();
  
}  })

}

}
