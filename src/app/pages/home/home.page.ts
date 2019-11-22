import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

import { Search } from '../../services/search.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public mobile: boolean = false;

  constructor(
    public srv: Search,
    public breakpointObserver: BreakpointObserver
  ) { }

  ngOnInit() {
    this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.HandsetPortrait])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.mobile = true;
          console.log(
            'Matches small viewport or handset in portrait mode'
          );
        }
      });
      this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.HandsetPortrait])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.mobile = true;
          console.log(
            'Matches x-small viewport or handset in portrait mode'
          );
        }
      });
      this.breakpointObserver
      .observe([Breakpoints.Medium, Breakpoints.HandsetPortrait])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.mobile = false;
          console.log(
            'Matches x-small viewport or handset in portrait mode'
          );
        }
      });
  }
}
