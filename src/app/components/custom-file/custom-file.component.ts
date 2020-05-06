import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { UploaderOptions, UploadOutput, UploadInput } from 'ngx-uploader';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-custom-file',
  templateUrl: './custom-file.component.html',
  styleUrls: ['./custom-file.component.scss'],
})
export class CustomFileComponent implements OnInit {
  @Output() uploadFile: EventEmitter<any> = new EventEmitter();
  @Input() typeFile = '.xls,.xlsx';
  @Input() maxSize = 1; // MB
  filename: string = '';
  constructor(private _snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  onChange(event) {
    const file = event.srcElement.files[0] || null;
    if (file) {
      if (!this.typeFile.includes(file.name.split('.')[1])) {
        this.messageError('le type de ficher n est pas valide');
      } else if (file.size > this.maxSize * 1000000) {
        this.messageError('n oublie pas max size c est' + this.maxSize + ' MB');
      } else {
        this.filename = file.name;
        this.uploadFile.emit(file);
      }
    }
  }

  messageError(message: string) {
    this._snackBar.open(message, 'close', {
      duration: 3000,
    });
  }
}
