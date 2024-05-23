import { Component } from '@angular/core';

@Component({
  selector: 'app-slidebar',
  templateUrl: './slidebar.component.html',
  styleUrl: './slidebar.component.css'
})
export class SlidebarComponent {
  tRequest: boolean = false;
  tAdmin: boolean = false;
  tAdmins:boolean=false;
  tRequests:boolean=false;
  toggleRequest() {
    this.tRequest = !this.tRequest;
  }
  toggleAdmin() {
    this.tAdmin = !this.tAdmin;
  }
  toggleAdmins() {
    this.tAdmins = !this.tAdmins;
  }
  toggleRequests(){
    this.tRequests =!this.tRequests;
  }
}
