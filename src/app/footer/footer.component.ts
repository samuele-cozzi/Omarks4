import { Component, OnInit } from '@angular/core';
import {LinkMenuItem} from 'ngx-auth-firebaseui';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  links: LinkMenuItem[];

  constructor() {}

  ngOnInit(): void {
    this.links = [
      {icon: 'home', text: 'Widgets', callback: this.logOut},
      {icon: 'favorite', text: 'Reorder', callback: this.logOut},
      {icon: 'logout', text: 'Settings', callback: this.logOut},
      {icon: 'logout', text: 'Profile', callback: this.logOut},
      {icon: 'logout', text: 'Logout', callback: this.logOut},
    ];
  }

  logOut(event) {
    location.reload();
  }

}
