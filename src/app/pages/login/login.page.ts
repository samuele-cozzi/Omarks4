import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthProvider} from 'ngx-auth-firebaseui';

import { SettingsService} from '../../services/settings.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  providers = AuthProvider;
  
  constructor(private router: Router,
    public srv: SettingsService) { }

  ngOnInit() {
  }

  loggedIn(event) {
    console.log(event);
    console.log(this.srv.settings);
    this.srv.updateRefreshToken(event.uid, event.refreshToken);
    this.router.navigate(['/home'])
  }

  loggedError(event) {
    console.error(event);
  }

}
