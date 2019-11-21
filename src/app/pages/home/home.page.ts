import { Component } from '@angular/core';

import { Search} from '../../services/search.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public srv: Search
  ) {}
  
  
}
