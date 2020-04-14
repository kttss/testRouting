import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/models/article';
import * as moment from 'moment';
moment.updateLocale('fr', {});
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;
  constructor() {}

  ngOnInit(): void {}

  shortContent(value: string): string {
    return value && value.length > 200
      ? value.substring(0, 100) + '...'
      : value;
  }
  gettimeFromNow(date: any) {
    return moment(date).fromNow();
  }
}
