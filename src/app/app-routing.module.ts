import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeTodoComponent } from './home-todo/home-todo.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: 'homeProduct', component: HomeComponent},
  {path: 'homeTodo', component: HomeTodoComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
