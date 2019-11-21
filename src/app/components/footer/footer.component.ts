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
    if (event.key == 'Enter' && event.isTrusted && !event.ctrlKey) {
      if (this.srv.searchItems.length > 0) {
        this.open(this.srv.searchItems[0], null);
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
    this.srv.get_query(searchTerm);
  }

  open(item, event) {
    typeof item.time_read == "string" && (item.time_read = 0);
    item.time_read++;
    this.srv.save_item(item);
    window.open(item.given_url)
  }

}
