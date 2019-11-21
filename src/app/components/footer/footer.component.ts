import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { IonSearchbar, IonInput, PopoverController } from '@ionic/angular';
import { Router } from "@angular/router";

import { Search } from '../../services/search.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  @ViewChild('search', {static: false}) search : IonSearchbar;
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    //console.log(event);
    if (event.key == 'Enter' && event.isTrusted && event.ctrlKey) {
      if(this.srv.searching){
        this.searchCancel(event);
      }
      else
      {
        this.srv.searching = true;
        this.search.setFocus();
      }
    }
  }


  constructor(
    private router: Router,
    private srv: Search,
    public modalController: PopoverController 
  ) { }

  gotoPage(page: string) {
    this.router.navigate(['/' + page]);
  }

  async searchFocus(event) {
    this.srv.searching = true;
  }

  async searchCancel(event) {
    this.search.value = "";
    this.srv.searching = false;
  }

  searchFilter(event) {
    const searchTerm = event.srcElement.value;
    this.srv.query = searchTerm;
  }

}
