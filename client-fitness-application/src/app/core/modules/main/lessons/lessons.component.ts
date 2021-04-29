import { Component, OnInit } from '@angular/core';
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
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getLessons();
  }

  async getLessons() {
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
      console.log(lesson);
      this.userService.assignLesson({
        lesson_id: lesson.id,
        date: lesson.date
      });
    } catch (err) {
      console.log();
    }
  }

}
