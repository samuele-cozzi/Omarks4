import { Component, OnInit } from '@angular/core';
import { DatetimeChangeEventDetail } from '@ionic/core';
import { Time } from '@angular/common';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss'],
})
export class ClockComponent implements OnInit {

  public myDate: Date = new Date;
  private timer;

  constructor() { }

  ngOnInit() {
    this.timer = setInterval(() => {
      this.myDate = new Date();
    }, 1000);
  }

  ngOnDestroy(){
    clearInterval(this.timer);
  }

}
