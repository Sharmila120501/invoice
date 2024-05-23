import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-e-bank',
  templateUrl: './e-bank.component.html',
  styleUrl: './e-bank.component.css'
})
export class EBankComponent implements OnInit {

  @Output() lav  = new EventEmitter<Boolean>
  @Input() aId: any;

  editBank:FormGroup;
  constructor(private ebank:FormBuilder, private comp:CompanyService){
    this.editBank = this.ebank.group({
      
      bankId:[],
      companyId:[],
      accNo:[],
      confirmAccNo:[],
      bankName:[],
      branchName:[],
      ifsc:[]
    });
  }

    ngOnInit() {
      console.log(this.aId);
      this.fetchBank();
    }
   _bankDetails:any;
    fetchBank(){
      this.comp.getbankId(this.aId).subscribe((res) =>{
        console.log(res);
        this._bankDetails=res;

        this.editBank.patchValue({
          companyId:this._bankDetails.companyId,
          bankId:this._bankDetails.bankId,
          accNo:this._bankDetails.accNo,
          confirmAccNo:this._bankDetails.confirmAccNo,
          ifsc:this._bankDetails.ifsc,
          bankName:this._bankDetails.bankName,
          branchName:this._bankDetails.branchName

        })
      })
    }

    save(data:any){
      let id = this._bankDetails.bankId
      console.log(id);
      
      this.comp.updatebank(id,data).subscribe((res)=>{
          console.log(res);
          
      })
    }
  
}