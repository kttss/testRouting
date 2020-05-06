import { Component, OnInit } from '@angular/core';
import readXlsxFile from 'read-excel-file';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { control } from 'leaflet';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent implements OnInit {
  columnForm: FormGroup;
  fileForm: FormGroup;
  columns: any[] = [];
  columnsDisplay: string[] = [];
  columnsKeys: string[] = [];
  data: any[] = [];

  dataSource: MatTableDataSource<any> = new MatTableDataSource([]);
  // @ViewChild(MatSort, { static: true }) sort: MatSort;
  // @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private fbuild: FormBuilder) {}

  ngOnInit(): void {
    this.columnForm = this.fbuild.group({});
    this.fileForm = this.fbuild.group({
      file: ['', Validators.required],
    });
  }

  fileUploaded(event, stepper) {
    this.fileForm.controls.file.setValue(event);
    readXlsxFile(event).then((rows) => {
      this.columns = rows[0].map((e, i) => {
        const name = 'col' + (i + 1);
        this.columnsDisplay.push(e);
        this.columnsKeys.push(name);
        return {
          key: 'col' + (i + 1),
          value: e,
        };
      });
      this.setForm();
      this.data = this.transformData(rows, this.columnsKeys);
      this.dataSource = new MatTableDataSource(this.data);
      stepper.next();
    });
  }
  change(event, stepper) {
    // console.log(event.srcElement.files[0]);
    // const file = event.srcElement.files[0] || null;
    // if (file.name.split('.')[1] == 'xlsx' || file.name.split('.')[1] == 'xls') {
    // }
  }

  transformData(data, colmns): any[] {
    const result: any[] = [];
    data.forEach((item, i) => {
      if (i >= 1) {
        const ligne = {};
        colmns.forEach((col, j) => {
          ligne[col] = item[j];
        });
        result.push(ligne);
      }
    });
    return result;
  }

  setForm() {
    const cform = {};
    this.columns.forEach((el) => {
      cform[el.key] = new FormControl(true);
    });
    this.columnForm = this.fbuild.group(cform);

    this.columnForm.valueChanges.subscribe((data) => {
      this.columnsDisplay = [];
      this.columnsKeys = [];
      for (const key in data) {
        if (data[key]) {
          const obj = this.columns.find((e) => e.key === key);
          this.columnsDisplay.push(obj.value);
          this.columnsKeys.push(obj.key);
        }
      }
    });
  }
}
