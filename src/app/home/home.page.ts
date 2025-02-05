import { Component, OnInit } from '@angular/core';
import { GestionCoursesService } from '../gestion-courses.service';
import { Course } from '../models/course';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  tabCourses: Course[] = [];
  constructor(private courseSer: GestionCoursesService) {}

  ngOnInit() {
    this.tabCourses = this.courseSer.getAllCourses();
  }
}