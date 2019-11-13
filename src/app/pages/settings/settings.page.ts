import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  dark = false;
  constructor() {
    
   }

  ngOnInit() {
    this.dark = false;
  }

  changeDark(){
    document.body.classList.toggle('dark', this.dark);
  }
}
