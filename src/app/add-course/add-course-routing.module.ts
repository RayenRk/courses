import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddcoursePage } from './add-course.page';

const routes: Routes = [
  {
    path: '',
    component: AddcoursePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddcoursePageRoutingModule {}