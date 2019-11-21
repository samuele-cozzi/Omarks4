import { Component, OnInit } from '@angular/core';

import { Search } from '../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  constructor(
    private srv: Search
  ) { }

  ngOnInit() {
    this.srv.get_facets();
  }

  async getSearchFacets(key, value) {
    this.srv.get_filtered_facets(key, value);    
  }

  open(item, event) {
    typeof item.time_read == "string" && (item.time_read = 0);
    item.time_read++;
    this.srv.save_item(item);
    window.open(item.given_url)
  }

  loadData(event){
    this.srv.load_more();
    event.target.complete();
  }

}
