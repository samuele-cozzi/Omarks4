import { Component, OnInit } from '@angular/core';
import { SettingsService} from '../../services/settings.service';
import { Settings } from '../../shared/settings.model'

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage {

  constructor(
    private srv: SettingsService
  ) {
    
   }

  save(){
    this.srv.update();
  }
}
