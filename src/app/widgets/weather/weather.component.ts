import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {

  constructor(
    public srv: WeatherService,
    public srvSettings: SettingsService,
  ) { }

  ngOnInit() {
    //console.log(this.srv);
  }

  open(event) {
    window.open("https://www.google.com/search?q=previsioni")
  }

}
