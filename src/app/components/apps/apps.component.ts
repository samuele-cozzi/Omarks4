import { Component, OnInit } from '@angular/core';

import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.scss'],
})
export class AppsComponent implements OnInit {

  constructor(
    private srv: DashboardService,
  ) { }

  ngOnInit() {}

  open(item, event) {
    // typeof item.time_read == "string" && (item.time_read = 0);
    // item.time_read++;
    // this.algoliaService.save_item(item);
    window.open(item.given_url)
  }

}
