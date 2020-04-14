import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article/article.service';
import { CategoryService } from 'src/app/services/category/category.service';
import { Category } from 'src/app/models/category';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  public listArticles: Article[] = [];
  public listCategorys: Category[] = [];
  public filterForm: FormGroup;
  constructor(
    private articleService: ArticleService,
    private categoryService: CategoryService,
    private fbuild: FormBuilder
  ) {
    this.filterForm = this.fbuild.group({ category: 'all' });
    this.filterForm.controls.category.valueChanges.subscribe((value) => {
      if (value == 'all') {
        this.getAllArticles();
      } else {
        this.getArticlesByCategory(value);
      }
    });
  }

  ngOnInit(): void {
    this.getAllArticles();
    this.categoryService.getListCategory().then((data: Category[]) => {
      this.listCategorys = data;
    });
  }

  getAllArticles() {
    this.articleService.getAllArticles().then((list: Article[]) => {
      this.listArticles = list;
    });
  }
  getArticlesByCategory(category: number) {
    this.articleService.getArticlesByCategory(category).then((list) => {
      this.listArticles = list;
    });
  }
}
