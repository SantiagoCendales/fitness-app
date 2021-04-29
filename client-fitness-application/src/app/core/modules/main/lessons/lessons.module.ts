import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LessonsRoutingModule } from './lessons-routing.module';

import { MaterialModule } from '@shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LessonsComponent } from './lessons.component';


@NgModule({
  declarations: [LessonsComponent],
  imports: [
    CommonModule,
    LessonsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class LessonsModule { }
