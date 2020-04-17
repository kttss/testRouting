import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article/article.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteModalComponent } from 'src/app/components/delete-modal/delete-modal.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss'],
})
export class ArticleDetailsComponent implements OnInit {
  public article: Article;
  public liked = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private articleService: ArticleService,
    public dialog: MatDialog,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id: number = this.activatedRoute.snapshot.params.id;
    this.articleService.getArticlesById(id).then((data: Article) => {
      this.article = data;
      this.article.view++;
      this.updateArticle();
    });
  }
  openModal(): void {
    const dialogRef = this.dialog.open(DeleteModalComponent, {
      width: '300px',
      data: this.article.id,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result >= 0) {
        this.router.navigate(['/articles']);
      }
    });
  }
  like() {
    this.article.like++;
    this.liked = true;
    this.updateArticle();
  }
  updateArticle() {
    this.articleService.updateArticle(this.article).then((data) => {});
  }
  back() {
    this.location.back();
  }
}
