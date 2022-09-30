import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TasksCreateComponent } from './tasks-create/tasks-create.component';
import { TasksEditComponent } from './tasks-edit/tasks-edit.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'tasks-create', component: TasksCreateComponent},
  {path: 'tasks-list', component: TaskListComponent},
  {path: 'tasks-edit/:id', component: TasksEditComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
