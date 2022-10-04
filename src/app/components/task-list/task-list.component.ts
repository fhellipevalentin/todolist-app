import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Tasks } from 'src/app/model/tasks';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor( private taskService: TaskService, private formBilder: FormBuilder) { }
  
  formulary!: FormGroup;

  tasksList: any = []
  columns : string[] = ['author', 'title', 'created_At', 'status', 'desc']

  ngOnInit(): void {
    this.showData();
    this.formulary = this.formBilder.group( {
      author: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required),
      desc: new FormControl('', Validators.required)
    })

  }

  showData() {
    this.taskService.listDataTasks().subscribe((data: {})=> {
      this.tasksList = data
    })
  }

  submit() {
    const formValues = this.formulary.value
    const tasks: Tasks = new Tasks(formValues.author, formValues.title, formValues.desc, new Date().toUTCString(), false);
    this.taskService.insertTask(tasks).subscribe(response => {
      this.tasksList.push(response)
      console.log(response)
    })
  }
}
