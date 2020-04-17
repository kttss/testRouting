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
  public listArticlesData: Article[] = [];
  public listCategorys: Category[] = [];
  public filterForm: FormGroup;
  constructor(
    private articleService: ArticleService,
    private categoryService: CategoryService,
    private fbuild: FormBuilder
  ) {
    this.filterForm = this.fbuild.group({ category: 'all', titre: '' });
  }

  ngOnInit(): void {
    this.getAllArticles();
    this.categoryService.getListCategory().then((data: Category[]) => {
      this.listCategorys = data;
    });
    this.filterForm.valueChanges.subscribe((data) => {
      this.listArticles = this.getArticlesByFilter(data);
    });
  }

  getAllArticles() {
    this.articleService.getAllArticles().then((list: Article[]) => {
      this.listArticlesData = list;
      this.listArticles = list;
    });
  }

  getArticlesByFilter(data): Article[] {
    let filter;
    if (data.category != 'all') {
      filter = (article) => {
        return (
          article.category == data.category &&
          article.titre.toLowerCase().indexOf(data.titre.toLowerCase()) !== -1
        );
      };
    } else {
      filter = (article) => {
        return (
          article.titre.toLowerCase().indexOf(data.titre.toLowerCase()) !== -1
        );
      };
    }
    return this.listArticlesData.filter(filter);
  }

  getCountArticlesByCategory(category): number {
    return this.listArticlesData.filter(
      (article) => article.category === category
    ).length;
  }
}
