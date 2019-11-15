import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { SettingsService} from '../../services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage {

  constructor(
    private srv: SettingsService,
    private router: Router
  ) {
    
  }

  save(){
    this.srv.update();
  }

  gotoPage(page: string){
    this.router.navigate(['/'+ page]);
  }
}
