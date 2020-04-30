import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'testRouting';

  constructor(private translateService: TranslateService) {}

  public ngOnInit(): void {
    if (localStorage.getItem('lang') != null) {
      this.translateService.setDefaultLang(localStorage.getItem('lang'));
    } else {
      localStorage.setItem('lang', 'fr');
      this.translateService.setDefaultLang('fr');
    }
  }
}
