import { Component, OnInit, Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.less']
})
export class TodoInputAddItensComponent implements OnInit{

  @Output() public emitItemTasList = new EventEmitter();

  addItemTaskList: string = "";
  constructor() { }

  ngOnInit(): void {
  }

  submitItemTaskList(){

    this.addItemTaskList = this.addItemTaskList.trim();
    if(this.addItemTaskList){
      this.emitItemTasList.emit(this.addItemTaskList);
      this.addItemTaskList = "";
    }
  }
}
