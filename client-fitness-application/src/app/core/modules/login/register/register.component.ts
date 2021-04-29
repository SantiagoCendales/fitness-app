import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '@app/core/services/restful/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.styl']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    document_id: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    c_password: new FormControl('', [Validators.required]),
  });

  constructor(
    private userService: UserService,
    private router: Router
  ) { }


  ngOnInit(): void {

  }

  async register(): Promise<void> {
    try {
      const { name, email, document_id, password, c_password } = this.registerForm.value;
      const {success, data, messagge } = await this.userService.register(
        {
          name,
          email,
          document_id,
          password,
          c_password
        }
      );
      this.router.navigate(['/lessons']);
    } catch (err) {
      console.log(err);
    }
  }

  goToLogin(): void {
    this.router.navigate(['/']);
  }
}
