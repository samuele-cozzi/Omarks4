import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { SettingsService} from '../../services/settings.service';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage {

  constructor(
    public srv: SettingsService,
    public srvDashboard: DashboardService,
    private router: Router
  ) {
  }

  save(event) {
    this.srv.update();
  }

  gotoPage(page: string) {
    this.router.navigate(['/' + page]);
  }

  gotoItem(page: string, id: string){
    this.router.navigate(['/' + page, id]);
  }

  async addDashboardItem(event) {
    const item_id = await this.srvDashboard.add(this.srvDashboard.items.length);
    this.gotoItem('dashboard-item', item_id)
  }

  async deleteDashboardItem(_id: string){
    this.srvDashboard.delete(_id);
  }

  // items = [1, 2, 3, 4, 5];

  doReorder(ev: any) {

    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);

    this.srvDashboard.items[ev.detail.from].index = ev.detail.to;
    this.srvDashboard.update(this.srvDashboard.items[ev.detail.from]);

    for (let _i = ev.detail.to; _i <  this.srvDashboard.items.length; _i++ ) {
      this.srvDashboard.items[_i].index ++;
      this.srvDashboard.update(this.srvDashboard.items[_i]);
    }
    // this.srvDashboard.items[ev.detail.to].index = ev.detail.from;

    // this.srvDashboard.update(this.srvDashboard.items[ev.detail.from]);
    // this.srvDashboard.update(this.srvDashboard.items[ev.detail.to]);

    ev.detail.complete();

    // // Before complete is called with the items they will remain in the
    // // order before the drag
    //console.log('Before complete', this.srvDashboard.items);

    // // Finish the reorder and position the item in the DOM based on
    // // where the gesture ended. Update the items variable to the
    // // new order of items
    // this.items = ev.detail.complete(this.items);

    // // After complete is called the items will be in the new order
    // console.log('After complete', this.items);
  }
}
