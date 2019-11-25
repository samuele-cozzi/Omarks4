import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss'],
})
export class ClockComponent implements OnInit {

  public myDate: number = Date.now();

  constructor() { }

  ngOnInit() {
    // this.timer = setInterval(() => {
    //   this.myDate = new Date();
    // }, 1000);
    

    setInterval(() => {
      this.myDate = Date.now()
    }, 1000);
  }

  ngOnDestroy(){
  }

}
