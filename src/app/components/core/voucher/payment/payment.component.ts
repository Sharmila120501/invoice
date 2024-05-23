import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
  showBankSelect: boolean = true;

  setPaymentType(paymentType: string): void {
    this.showBankSelect = paymentType !== 'Cash';
  }

}
