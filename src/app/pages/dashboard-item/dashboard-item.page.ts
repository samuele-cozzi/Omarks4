import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DashboardService } from '../../services/dashboard.service'
import { Item } from '../../shared/item.model';

@Component({
  selector: 'app-dashboard-item',
  templateUrl: './dashboard-item.page.html',
  styleUrls: ['./dashboard-item.page.scss'],
})
export class DashboardItemPage implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private srv: DashboardService
  ) { }

  ngOnInit() {
    let _id = this.route.snapshot.paramMap.get('id');
    console.log(_id);
    this.srv.initItem(_id);
  }

  save() {
    this.srv.update();
  }

}
