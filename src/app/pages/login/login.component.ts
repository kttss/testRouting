import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  constructor(
    private fbuild: FormBuilder,
    private authService: AuthenticationService,
    private router: Router,
    private alert: ToastrService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fbuild.group({
      username: this.fbuild.control('', [Validators.required]),
      password: this.fbuild.control('', [Validators.required]),
    });
    if (this.authService.isAuthenticate()) {
      this.router.navigate(['./']);
    }
  }

  checkInValid(control: FormControl): boolean {
    return control?.invalid && (control?.touched || control?.dirty);
  }

  onSubmit() {
    this.authService
      .login(this.loginForm.value.username, this.loginForm.value.password)
      .then((data) => {
        this.router.navigate(['./']);
      })
      .catch((err) => {
        this.alert.error(err, 'login Error');
      });
  }
}
