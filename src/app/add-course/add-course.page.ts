import { Component, OnInit } from '@angular/core';
import { GestionCoursesService } from '../gestion-courses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcourse',
  templateUrl: './add-course.page.html',
  styleUrls: ['./add-course.page.scss'],
})
export class AddcoursePage {
  constructor(
    private courseSer: GestionCoursesService,
    private router: Router
  ) {}


  onSubmit(formValue) {
    this.courseSer.addCourse(formValue);
    this.router.navigateByUrl('/home');
  }
}