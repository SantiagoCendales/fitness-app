import { Component, OnInit } from '@angular/core';
import { UserService } from '@app/core/services/restful/user.service';

@Component({
  selector: 'app-user-lessons',
  templateUrl: './user-lessons.component.html',
  styleUrls: ['./user-lessons.component.styl']
})
export class UserLessonsComponent implements OnInit {

  userLessonsList = [];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getLessons();
  }

  async getLessons(): Promise<void> {
    try {
      const resutl = await this.userService.getUserLessons();
      this.userLessonsList = resutl;
    } catch (err) {
      console.log(err);
    }
  }

}
