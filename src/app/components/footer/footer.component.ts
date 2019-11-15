import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LinkMenuItem} from 'ngx-auth-firebaseui';

import { SettingsService} from '../../services/settings.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {

  constructor(
    private router: Router,
    private settings: SettingsService
  ) {}

  gotoPage(page: string){
    this.router.navigate(['/'+ page]);
  }

}
