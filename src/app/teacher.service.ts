import { Injectable } from '@angular/core';
import { Teacher } from "./teacher";
import { TEACHERS } from "./teacher-list";
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor() { }

  getTeachers(): Observable<Teacher[]>{
    return of (TEACHERS);
  }
  
}
