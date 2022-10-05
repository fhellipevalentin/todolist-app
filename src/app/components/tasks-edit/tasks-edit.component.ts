import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tasks } from 'src/app/model/tasks';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks-edit',
  templateUrl: './tasks-edit.component.html',
  styleUrls: ['./tasks-edit.component.css']
})
export class TasksEditComponent implements OnInit {

  constructor( 
    private taskService: TaskService,
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private formBuilder: FormBuilder ) { }
  
  formulary!: FormGroup;
  id = this.activatedRoute.snapshot.params['id']
  updateData: any = {
  }
  
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id']
    this.taskService
      .accessDataTasksById(id)
      .subscribe((data) => {
        this.updateData = data;
        this.updateData.created_At = new Date().toLocaleTimeString() + ' ' + new Date().toLocaleDateString()
      });
      this.formulary = this.formBuilder.group( {
        author: new FormControl('', Validators.required),
        title: new FormControl('', Validators.required),
        desc: new FormControl('', Validators.required),
        created_At: new FormControl('', Validators.required)
      })
  }
  
  updatingData() {
    if (confirm('Are you want to edit the task?')) {
      this.taskService.updateTask(this.id, this.updateData).subscribe(()=>{
        this.route.navigate(['/tasks-list'])
      })
    }
  }
}
