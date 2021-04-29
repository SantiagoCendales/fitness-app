import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserLessonsRoutingModule } from './user-lessons-routing.module';
import { UserLessonsComponent } from './user-lessons.component';


@NgModule({
  declarations: [
    UserLessonsComponent
  ],
  imports: [
    CommonModule,
    UserLessonsRoutingModule
  ]
})
export class UserLessonsModule { }
