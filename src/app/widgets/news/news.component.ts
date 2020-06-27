import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { SettingsService } from '../../services/settings.service';

import { News } from '../../shared/news.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {

  constructor(
    public srv: NewsService,
    public srvSettings: SettingsService,) { }

  ngOnInit() {
    this.srv.getLatests();
  }

}
