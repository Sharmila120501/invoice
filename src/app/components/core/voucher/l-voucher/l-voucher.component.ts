import { Component } from '@angular/core';

@Component({
  selector: 'app-l-voucher',
  templateUrl: './l-voucher.component.html',
  styleUrl: './l-voucher.component.css'
})
export class LVoucherComponent {

  isvalue:Boolean=false;
  close(cup:Boolean){
    this.isvalue=cup
  }
  openForm() {
    this.isvalue = true;
  }

}
