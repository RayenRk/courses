import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GestionCoursesService } from '../gestion-courses.service';
import { Course } from '../models/course';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-detailscourse',
  templateUrl: './details-course.page.html',
  styleUrls: ['./details-course.page.scss'],
})
export class DetailscoursePage implements OnInit {
  selectedCourse!: Course;
  constructor(
    private activatedRoute: ActivatedRoute,
    private alertCtrl: AlertController,
    private courseService: GestionCoursesService,
    private router: Router
  ) {}

  ngOnInit() {
    // this.activatedRoute.snapshot.params['id'];
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id !== null) {
      const course = this.courseService.getCourseById(Number(id));
      if (course) {
        this.selectedCourse = course;
      } else {
        // Handle the case where the course is not found
        console.error('Course not found');
      }
    } else {
      // Handle the case where id is null
      console.error('Invalid course id');
    }
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Confirmation',
      message: 'Etes-vous sûr de vouloir supprimer ce cours ?',
      buttons: [
        {
          text: 'Oui',
          handler: () => {
            this.courseService.deleteCourse(this.selectedCourse.id);
            this.router.navigateByUrl('/home');
          },
        },
        'Non',
      ],
    });

    await alert.present();
  }
}