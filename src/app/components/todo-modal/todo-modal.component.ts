import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Status } from 'src/app/models/status';
import { TodoService } from 'src/app/services/todo/todo.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-todo-modal',
  templateUrl: './todo-modal.component.html',
  styleUrls: ['./todo-modal.component.scss'],
})
export class TodoModalComponent implements OnInit {
  public todoForm: FormGroup;
  statusList: Status[] = [];
  color: any;
  constructor(
    public dialogRef: MatDialogRef<TodoModalComponent>,
    private fbuild: FormBuilder,
    private todoService: TodoService,
    private alert: ToastrService
  ) {}

  ngOnInit(): void {
    this.todoForm = this.fbuild.group({
      id: this.fbuild.control(null),
      name: this.fbuild.control('', [Validators.required]),
      status: this.fbuild.control(1, [Validators.required]),
      color: this.fbuild.control('#c95b5b', [Validators.required]),
    });

    this.todoService.getStatus().then((data: Status[]) => {
      this.statusList = data;
    });
  }

  onSubmit() {
    this.todoService.addTodo(this.todoForm.value).then((data) => {
      this.alert.success('success', 'Ajouter');
      this.dialogRef.close();
    });
  }

  selectColor(event) {
    this.todoForm.controls.color.setValue(event);
  }
}
