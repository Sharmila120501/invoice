import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  profile: boolean = false; 
  toggleSetting() {
    this.profile = !this.profile;
  }
  signOut(){
    sessionStorage.clear();
  }
  }

