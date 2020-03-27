import { Injectable } from '@angular/core';
import { Student } from "./students";
import { STUDENTS } from "./students-list";
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  getStudents(): Observable<Student[]>{
    return of (STUDENTS);
  }
  
}
