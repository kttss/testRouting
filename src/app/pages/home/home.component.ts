import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article/article.service';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public article: Article;
  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.articleService.getlastArticle().then((data: Article) => {
      this.article = data;
    });
  }
}
