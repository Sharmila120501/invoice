import { Component, Input, OnInit } from '@angular/core';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-l-bank',
  templateUrl: './l-bank.component.html',
  styleUrl: './l-bank.component.css'
})
export class LBankComponent implements OnInit {
  

 
  _BankList:any;
  companyId:any;
  baId:any;
  constructor(private ba:CompanyService){

  }
  ngOnInit(): void {
    // Retrieving company ID from session storage
    this.companyId = sessionStorage.getItem('companyId');
      this.fetchBankDetails();
    }
 
  isbank:Boolean=false;
  isvalue:Boolean=false;
  close(cup:Boolean){
    this.isbank=cup
  }
  fetchBankDetails() {
    // Fetch bank details based on company ID
    this.ba.getbank(this.companyId).subscribe(
      (res: any) => {
        console.log(res);
        this._BankList = res;
      },
      (error) => {
        console.error(error);
        // Handle error if needed
      }
    );
  }
  closeval(cup:Boolean){
    this.isvalue=cup
  }
  viewBank(data:any){
    this.isvalue=true
    
    this.baId =data 
    console.log(data);
    
    }

    deleteBank(index: number) {
      this._BankList.splice(index, 1);
    }

}
