import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ArticleService } from 'src/app/services/article/article.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss'],
})
export class DeleteModalComponent implements OnInit {
  constructor(
    private articleService: ArticleService,
    private alert: ToastrService,
    public dialogRef: MatDialogRef<DeleteModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number
  ) {}

  ngOnInit(): void {}

  no() {
    this.dialogRef.close();
  }

  yes() {
    this.articleService
      .deleteArticle(this.data)
      .then((data) => {
        this.dialogRef.close(this.data);
        this.alert.success('article a été supprimé', 'Suppression ...');
      })
      .catch((err) => {
        this.alert.error(err, 'Suppression ...');
      });
  }
}
