import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article/article.service';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public articles: Article[] = [];
  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.articleService.getAllArticles().then((data) => {
      this.articles = data;
    });
  }

  shortContent(value: string): string {
    return value && value.length > 200
      ? value.substring(0, 100) + '...'
      : value;
  }
}
