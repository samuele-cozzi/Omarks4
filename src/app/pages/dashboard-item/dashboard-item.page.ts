import { Component, OnInit } from '@angular/core';

import { Item } from '../../shared/item.model';

@Component({
  selector: 'app-dashboard-item',
  templateUrl: './dashboard-item.page.html',
  styleUrls: ['./dashboard-item.page.scss'],
})
export class DashboardItemPage implements OnInit {

  item: Item;

  constructor() { 
    this.item = new Item();
  }

  ngOnInit() {
  }

}
