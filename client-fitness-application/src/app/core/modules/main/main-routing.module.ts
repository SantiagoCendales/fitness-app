import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'user-lessons',
        loadChildren: () => import('./user-lessons/user-lessons.module').then(m => m.UserLessonsModule)
      },
      {
        path: 'lessons',
        loadChildren: () => import('./lessons/lessons.module').then(m => m.LessonsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
