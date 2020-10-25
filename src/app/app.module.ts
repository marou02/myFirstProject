import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { TodoComponent } from './todo/todo.component';
import {HomeComponent} from './home/home.component';
import {HomeTodoComponent} from './home-todo/home-todo.component';
import { FormProductComponent } from './form-product/form-product.component';
import { TemplateDrivenFormComponentComponent } from './template-driven-form-component/template-driven-form-component.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    HomeTodoComponent,
    TodoComponent,
    FormProductComponent,
    TemplateDrivenFormComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
