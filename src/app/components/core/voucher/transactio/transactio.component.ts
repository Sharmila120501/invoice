import { Component } from '@angular/core';

@Component({
  selector: 'app-transactio',
  templateUrl: './transactio.component.html',
  styleUrl: './transactio.component.css'
})
export class TransactioComponent {
  tRequest:boolean=false;
  toggleRequest() {
    this.tRequest = !this.tRequest;
  }

}
