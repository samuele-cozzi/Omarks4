import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { SettingsService} from '../../services/settings.service';
import { DashboardService } from '../../services/dashboard.service';
import { Item } from 'src/app/shared/item.model';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage {

  constructor(
    private srv: SettingsService,
    private srvDashboard: DashboardService,
    private router: Router
  ) {
  }

  save() {
    this.srv.update();
  }

  gotoPage(page: string) {
    this.router.navigate(['/' + page]);
  }

  async addDashboardItem() {
    const item_id = await this.srvDashboard.add(10);
    console.log(item_id);
    this.router.navigate(['/dashboard-item', item_id]);
  }

  // items = [1, 2, 3, 4, 5];

  doReorder(ev: any) {

    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);
    ev.detail.complete();

    // // Before complete is called with the items they will remain in the
    // // order before the drag
    // console.log('Before complete', this.items);

    // // Finish the reorder and position the item in the DOM based on
    // // where the gesture ended. Update the items variable to the
    // // new order of items
    // this.items = ev.detail.complete(this.items);

    // // After complete is called the items will be in the new order
    // console.log('After complete', this.items);
  }
}
