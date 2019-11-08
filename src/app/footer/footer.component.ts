import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LinkMenuItem} from 'ngx-auth-firebaseui';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  links: LinkMenuItem[];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.links = [
      {icon: 'home', text: 'Widgets', callback: this.logOut},
      {icon: 'reorder', text: 'Reorder', callback: this.logOut},
      {icon: 'settings', text: 'Settings', callback: this.gotoSetting},
    ];
  }

  logOut(event) {
    location.reload();
  }

  gotoSetting(event){
    window.location.href = '/settings';
  }

}
