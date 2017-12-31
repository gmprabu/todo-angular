import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {TodoAppComponent} from './todo-app/todo-app.component'


const routes: Routes = [
  { path: '', component: TodoAppComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}