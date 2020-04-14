import { Injectable } from '@angular/core';
import { NetworkService } from '../network/network.service';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private network: NetworkService) {}
  private urlArticle = '/api/articles/';
  getlastArticle() {
    return this.network.get(this.urlArticle + '9');
  }
  getArticlesByCategory(category: number) {
    return this.network.get(this.urlArticle + '?category=' + category);
  }
  getArticlesById(id: number) {
    return this.network.get(this.urlArticle + id);
  }
  getAllArticles() {
    return this.network.get(this.urlArticle);
  }
}
