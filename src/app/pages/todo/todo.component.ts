import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { TodoService } from 'src/app/services/todo/todo.service';
import { Status } from 'src/app/models/status';
import { Todo } from 'src/app/models/todo';
import { MatDialog } from '@angular/material/dialog';
import { TodoModalComponent } from 'src/app/components/todo-modal/todo-modal.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  constructor(private todoService: TodoService, public dialog: MatDialog) {}
  statusList: Status[] = [];
  todoData: Todo[] = [];
  startedData: Todo[] = [];
  completedData: Todo[] = [];
  ngOnInit(): void {
    this.todoService.getStatus().then((data: Status[]) => {
      this.statusList = data;
    });
    this.todoService.getTodo().then((data: Todo[]) => {
      this.todoData = data.filter((item) => item.status === 1);
      this.startedData = data.filter((item) => item.status === 2);
      this.completedData = data.filter((item) => item.status === 3);
    });
  }
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  drop(event: CdkDragDrop<string[]>, status) {
    console.log('sta', status);
    console.log(
      event,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );

    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      console.log('non condition');
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    const item: any = event.container.data[event.currentIndex];
    item.status = status;
    this.todoService.updateTodo(item).then((data) => {});
  }

  openModal() {
    const dialogRef = this.dialog.open(TodoModalComponent, {
      width: '400px',
      data: null,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.ngOnInit();
    });
  }

  getTodoByStatus(status: number): Todo[] {
    return this.todoData.filter((e) => e.status == status);
  }
}
