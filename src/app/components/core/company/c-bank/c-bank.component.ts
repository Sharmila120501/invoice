import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-c-bank',
  templateUrl: './c-bank.component.html',
  styleUrl: './c-bank.component.css'
})
export class CBankComponent {

  @Output() sharmi =  new EventEmitter<Boolean>
  AddBank:FormGroup;

  constructor(private fb:FormBuilder, private ba:CompanyService){
    this.AddBank=this.fb.group({
      companyId:[sessionStorage.getItem('companyId')],
      accNo:['',[Validators.required,Validators.pattern(/^-?\d*\.?\d+$/),Validators.minLength(8),Validators.maxLength(15)]],
      confirmAccNo:['',[Validators.required,Validators.pattern(/^-?\d*\.?\d+$/),Validators.minLength(8),Validators.maxLength(15)]],
      ifsc:['', [Validators.required, Validators.pattern(/^[A-Z]{4}0[0-9]{6}$/)]],
      bankName:['', [Validators.required, Validators.pattern('[A-Za-z ]+')]],
      branchName:['',[Validators.required, Validators.pattern('[A-Za-z ]+')]]
  
    },{ validator: this.confirmAccountNumberValidator})
  }
  bank(data: any) {
    // Sending bank data to the server
    this.ba.addbank(data).subscribe(
      (res: any) => {
        console.log(res);
        // Storing company ID in session storage after successful post
        sessionStorage.setItem('companyId', data.companyId);
        // Resetting the form
        this.AddBank.reset();
      },
      (error) => {
        if(error.status==201)
          {
            console.log('success');
            this.AddBank.reset();
            
          }
       
        // Handle error if needed
      }
    );
  }
  confirmAccountNumberValidator(group: FormGroup) {
    const accountNo = group.get('accNo')?.value;
    const conAccountNo = group.get('confirmAccNo')?.value;

    return accountNo === conAccountNo ? null : { mismatch: true };
  }

  BANK:string=''
  BRANCH:string=''
  _ifscdata:any;

  fetchifsc(data:any){
    const ifscValue = this.AddBank.get('ifsc')?.value;
    console.log(ifscValue);
      this.ba.ifscget(ifscValue).subscribe((res)=>{
       console.log(res);
       this._ifscdata=res

      this.AddBank.patchValue({
        bankName: this._ifscdata.BANK,
        branchName:this._ifscdata.BRANCH,
      })
      

     })
      

      
    }
    
  }

