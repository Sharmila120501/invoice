import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-e-company',
  templateUrl: './e-company.component.html',
  styleUrl: './e-company.component.css'
})
export class ECompanyComponent implements OnInit {

  @Output() priya  = new EventEmitter<Boolean>
  @Input() aId:any
 
editCompany: FormGroup;
constructor(private fb:FormBuilder, private co:CompanyService){
  this.editCompany=this.fb.group({
    id:[],
    comId:[],
    comName:[],
    phoneNumber:[],
    email:[],
    gst:[],
    add1:[],
    add2:[],
    city:[],
    state:[],
    pinCode:[],
    panNum:[]

  })
}
_customerDetails:any;
  ngOnInit() {
   console.log(this.aId);
   this.edit()
  }

  edit(){
    this.co.view(this.aId).subscribe((res)=>{
      this._customerDetails=res
      sessionStorage.setItem('companyId',this._customerDetails.id);
      this.editCompany.patchValue({
        id:this._customerDetails.id,
        comId:this._customerDetails.comId,
        comName:this._customerDetails.comName,
        phoneNumber:this._customerDetails.phoneNumber,
        email:this._customerDetails.email,
        gst:this._customerDetails.gst,
        add1:this._customerDetails.add1,
        add2:this._customerDetails.add2,
        city:this._customerDetails.city,
        state:this._customerDetails.state,
        pinCode:this._customerDetails.pinCode,
        panNum:this._customerDetails.panNum

      })
    })
  }
  save(data:any){
    let id = sessionStorage.getItem('companyId')
    console.log(id);
    this.co.update(id,data).subscribe((res)=>{
      console.log(res);
    },
    (error)=>{
      if(error.status==201)
  {
    console.log('success');
    this.editCompany.reset();
    
  }  }
    )
  }

}
