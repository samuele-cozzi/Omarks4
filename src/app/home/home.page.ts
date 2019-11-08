import { Component } from '@angular/core';
import {LinkMenuItem} from 'ngx-auth-firebaseui';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

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
