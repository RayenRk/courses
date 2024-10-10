import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddcoursePageRoutingModule } from './add-course-routing.module';

import { AddcoursePage } from './add-course.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddcoursePageRoutingModule
  ],
  declarations: [AddcoursePage]
})
export class AddcoursePageModule {}