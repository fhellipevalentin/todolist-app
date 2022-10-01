import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, retry, catchError } from 'rxjs';
import { Tasks } from '../model/tasks';
import { Errors } from '../errors/Errors';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  URLBase: string = environment.apiURLBase
  
  private errorHandle: Errors = new Errors()

  constructor( private http: HttpClient ) { }

  authorizationAccess = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  listDataTasks(): Observable<Tasks> {
    return this.http.get<Tasks>(this.URLBase+'/tasks')
    .pipe (
      retry(1),
      catchError(this.errorHandle.appError)
    )
  }
}
