import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLessonsComponent } from './user-lessons.component';

const routes: Routes = [
  {
    path: '',
    component: UserLessonsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserLessonsRoutingModule { }
