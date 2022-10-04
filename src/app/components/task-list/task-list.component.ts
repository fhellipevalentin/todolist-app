import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Tasks } from 'src/app/model/tasks';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor( private taskService: TaskService, private formBilder: FormBuilder, private snackBar: MatSnackBar) { }
  
  formulary!: FormGroup;

  tasksList: any = []
  columns : string[] = ['author', 'title', 'created_At', 'status', 'desc', 'options']

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
      let list: Tasks[] = [...this.tasksList, response]
        this.tasksList = list
      this.snackBar.open('The Task has been added', 'Success!', {
        duration: 2000
      })
      this.formulary.reset();
      console.log(response)
    })
  }
  deleteData(id:any) {
    if(confirm('Are yout sure you want to delete this task?')) {
      this.taskService.deleteTaskById(id).subscribe(()=>{
        this.showData()
      })
    }
  }
}
