import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { IonSearchbar, IonInput, IonButton} from '@ionic/angular';
import { Router } from "@angular/router";
import { LinkMenuItem } from 'ngx-auth-firebaseui';

import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  @ViewChild('search', {static: false}) search : IonSearchbar;
  @ViewChild('hidden', {static: false}) hidden : IonInput;
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    //console.log(event);
    if (event.key == 'Enter' && event.isTrusted && event.ctrlKey) {
      if(this.searchFocused){
        this.hidden.setFocus();
      }
      else
      {
        this.search.setFocus();
      }
    }
  }

  private searchFocused = false;

  constructor(
    private router: Router,
    private settings: SettingsService
  ) { }

  gotoPage(page: string) {
    this.router.navigate(['/' + page]);
  }

  searchFocus(event) {
    this.searchFocused = true;
    console.log("focus");
  }

  searchLostFocus(event) {
    this.searchFocused = false;
    console.log("lost focus");
  }

  searchFilter(event) {
    const searchTerm = event.srcElement.value;

    console.log(searchTerm);
  }

}
