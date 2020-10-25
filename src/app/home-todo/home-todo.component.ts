import { Component, OnInit } from '@angular/core';
import {Todo} from '../model/todo';
import {User} from '../model/user';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-home-todo',
  templateUrl: './home-todo.component.html',
  styleUrls: ['./home-todo.component.css']
})
export class HomeTodoComponent implements OnInit {
  listTodo: Todo[];
  listUser: User[];
  comptTodo: number;
  constructor(private calcul: ProductService) { }

  ngOnInit(): void {
    this.comptTodo = 0;
    this.listTodo = [
      {userId: 12, id: 1, title: 'task 1', completed: false },
      {userId: 12, id: 2, title: 'task 2', completed: false },
      {userId: 12, id: 3, title: 'task 3', completed: true },
      {userId: 12, id: 4, title: 'task 4', completed: false }
      ];
  }

  changeEtat(t: Todo){
    let i = this.listTodo.indexOf(t);
    this.listTodo[i].completed = true;
  }

  getCompleted(){
    for (let i in this.listTodo){
      if (this.listTodo[i].completed){
        this.comptTodo++;
      }
    }
  }

  getComplet(){
    this.comptTodo = this.calcul.getStat(this.listTodo, 'completed', true);
  }

}
