import { Component, OnInit } from '@angular/core';

//Interface
import { TaskList } from './../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.less']
})
export class TodoListComponent implements OnInit {


  public taskList: Array<TaskList> = [
  ];

  constructor() { }

  ngOnInit(): void {
  }

  deleteItemTaskList(event: number) {
    this.taskList.splice(event, 1);
  }

  deleteAllTaskList() {
    const confirm = window.confirm("Você deseja realmente Deletar tudo?");

    if (confirm) {
      this.taskList = [];
    }
  }

  setEmitTaskList(event: string) {
    this.taskList.push({ task: event, checked: false })
  }
}
