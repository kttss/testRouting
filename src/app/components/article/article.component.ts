import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from 'src/app/models/article';
import * as moment from 'moment';
import { MatDialog } from '@angular/material/dialog';
import { DeleteModalComponent } from '../delete-modal/delete-modal.component';

moment.updateLocale('fr', {});
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;
  @Output() removed = new EventEmitter<boolean>();
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  shortContent(value: string): string {
    return value && value.length > 200
      ? value.substring(0, 100) + '...'
      : value;
  }

  gettimeFromNow(date: any) {
    return moment(date).fromNow();
  }

  openModal(): void {
    const dialogRef = this.dialog.open(DeleteModalComponent, {
      width: '300px',
      data: this.article.id,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result >= 0) {
        this.removed.emit(true);
      }
    });
  }
}
