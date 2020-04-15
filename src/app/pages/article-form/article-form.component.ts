import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article/article.service';
import { CategoryService } from 'src/app/services/category/category.service';
import { Category } from 'src/app/models/category';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { Article } from 'src/app/models/article';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss'],
})
export class ArticleFormComponent implements OnInit {
  public listCategorys: Category[] = [];
  public articleForm: FormGroup;
  public isEdit: boolean = false;
  constructor(
    private articleService: ArticleService,
    private categoryService: CategoryService,
    private fbuild: FormBuilder,
    private alert: ToastrService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) {
    this.articleForm = fbuild.group({
      id: fbuild.control(null),
      titre: fbuild.control('', [Validators.required, Validators.minLength(6)]),
      category: fbuild.control('', [Validators.required]),
      photo: fbuild.control('https://i.picsum.photos/id/0/218/180.jpg', [
        Validators.required,
      ]),
      content: fbuild.control('', [Validators.required]),
      creatAt: fbuild.control(null),
    });
  }

  ngOnInit(): void {
    const id: number = this.activatedRouter.snapshot.params.id;
    if (id) {
      this.isEdit = true;
      this.loadArticle(id);
    }

    this.categoryService.getListCategory().then((data: Category[]) => {
      this.listCategorys = data;
    });
  }

  loadArticle(id: number) {
    this.articleService.getArticlesById(id).then((data) => {
      this.articleForm.setValue(data);
    });
  }
  checkInValid(control: FormControl): boolean {
    return control?.invalid && (control?.touched || control?.dirty);
  }

  onSubmit() {
    if (this.articleForm.invalid) {
      for (const ctrl in this.articleForm.controls) {
        this.articleForm.controls[ctrl].markAsTouched();
      }
    } else {
      const article: Article = this.articleForm.value;
      if (this.isEdit) {
        this.updateArticle(article);
      } else {
        this.createArticle(article);
      }
    }
  }

  createArticle(article: Article) {
    article.creatAt = new Date();
    this.articleService
      .addArticle(article)
      .then((data) => {
        this.alert.success('success', 'Ajouter');
        this.router.navigate(['/articles']);
        this.articleForm.reset();
      })
      .catch((err) => {
        this.alert.error(err, 'Error');
      });
  }

  updateArticle(article: Article) {
    this.articleService
      .updateArticle(article)
      .then((data) => {
        this.alert.success('success', 'Update');
        this.router.navigate(['/articles/', article.id]);
        this.articleForm.reset();
      })
      .catch((err) => {
        this.alert.error(err, 'Error');
      });
  }
}
