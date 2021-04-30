import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LessonsService } from '@app/core/services/restful/lessons.service';
import { UserService } from '@app/core/services/restful/user.service';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.styl']
})
export class LessonsComponent implements OnInit {


  lessonsList = [];

  constructor(
    private lessonsService: LessonsService,
    private userService: UserService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getLessons();
  }

  async getLessons(): Promise<void> {
    try {
      const {success, data, message } = await this.lessonsService.getLessons();
      console.log(data);
      this.lessonsList = data;
    } catch (err) {
      console.log(err);
    }
  }

  async bookClass(lesson): Promise<void> {
    try {
      await this.userService.assignLesson({
        lesson_id: lesson.id,
        date: lesson.date
      });
      this.getLessons();
      this.snackBar.open('Successfully created reservation', '', {duration: 3000});
    } catch (err) {
      this.snackBar.open(err.error.message, '', {duration: 3000, verticalPosition: 'top'});
      console.log(err);
    }
  }

}
