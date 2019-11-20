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

  ngOnInit() {}

}
