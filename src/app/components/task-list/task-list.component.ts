import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Tasks } from 'src/app/model/tasks';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor( private taskService: TaskService, private formBilder: FormBuilder) { }
  
  tasksList: any = [] 
  columns : string[] = ['author', 'title', 'created_At', 'status', 'desc']

  ngOnInit(): void {
    this.showData()
  }

  showData() {
    this.taskService.listDataTasks().subscribe((data: {})=> {
      this.tasksList = data
    })
  }
}
