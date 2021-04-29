import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '@app/core/services/restful/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private userService: UserService,
    private router: Router,
  ) { }


  ngOnInit(): void {

  }

  async login(): Promise<void> {
    try {
      const { email, password } = this.loginForm.value;
      const {success, data, messagge } = await this.userService.login(
        {
          email,
          password
        }
      );
      this.router.navigate(['/lessons']);
    } catch (err) {
      console.log(err);
    }
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }

}
