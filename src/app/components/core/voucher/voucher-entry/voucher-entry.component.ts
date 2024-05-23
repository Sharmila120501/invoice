import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-voucher-entry',
  templateUrl: './voucher-entry.component.html',
  styleUrl: './voucher-entry.component.css'
})
export class VoucherEntryComponent {
  @Output() close = new EventEmitter<Boolean>

  transaction = {
    date: '',
    pay: '',
    crdr: 'CR',
    amount: 0,
    towards: 'rent',
    accountHead: 'purchase'
  };

}
