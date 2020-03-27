import { Component, OnInit } from '@angular/core';
import { Teacher } from "../teacher";
import { TEACHERS } from "../teacher-list";
import { TeacherService } from "../teacher.service";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  teachers: Teacher[] = [];

  constructor(private teacherService: TeacherService) { }

  ngOnInit() {
    this.getTeachers();
  }
  getTeachers(): void {
    this.teacherService.getTeachers()
      .subscribe(teachers => this.teachers = teachers.slice(1, 5));
  }

  

}
