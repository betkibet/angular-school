import { Component, OnInit } from '@angular/core';
import {Teacher } from '../teacher';
import { TeacherService } from "../teacher.service";

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {
  
  teachers: Teacher[];
  selectedTeacher : Teacher;

  constructor(private teacherService: TeacherService) { }

  getTeachers(): void{
    this.teacherService.getTeachers()
        .subscribe(teachers => this.teachers = teachers);
  }

  ngOnInit() {
    this.getTeachers();
  }

  onSelect(teacher: Teacher): void{
    this.selectedTeacher = teacher;
  }

}
