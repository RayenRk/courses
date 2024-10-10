import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailscoursePage } from './details-course.page';

const routes: Routes = [
  {
    path: '',
    component: DetailscoursePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailscoursePageRoutingModule {}