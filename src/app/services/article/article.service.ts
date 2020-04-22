import { Injectable } from '@angular/core';
import { NetworkService } from '../network/network.service';
import { Article } from 'src/app/models/article';

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
    return this.network.get(this.urlArticle).then((data: Article[]) => {
      return Promise.resolve(data.sort((a, b) => b.id - a.id));
    });
  }

  addArticle(article: Article) {
    return this.network.post(this.urlArticle, article);
  }

  updateArticle(article: Article) {
    return this.network.put(this.urlArticle, article);
  }

  deleteArticle(id: number) {
    return this.network.delete(this.urlArticle + id);
  }
}
