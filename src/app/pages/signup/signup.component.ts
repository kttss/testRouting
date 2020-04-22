import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MustMatch } from 'src/app/shared/custom-validators/must-match.validator';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  public userForm: FormGroup;
  constructor(
    private fbuild: FormBuilder,
    private authService: AuthenticationService,
    private userService: UserService,
    private router: Router,
    private alert: ToastrService
  ) {}

  ngOnInit(): void {
    this.userForm = this.fbuild.group(
      {
        fullname: this.fbuild.control('', [Validators.required]),
        username: this.fbuild.control('', [Validators.required]),
        password: this.fbuild.control('', [Validators.required]),
        passwordConfirm: this.fbuild.control('', [Validators.required]),
      },
      {
        validator: MustMatch('password', 'passwordConfirm'),
      }
    );
  }

  checkInValid(control: FormControl): boolean {
    return control?.invalid && (control?.touched || control?.dirty);
  }

  onSubmit() {
    if (this.userForm.invalid) {
      for (const ctrl in this.userForm.controls) {
        this.userForm.controls[ctrl].markAsTouched();
      }
    } else {
      const user: User = this.userForm.value;
      this.authService.getToken(user).then((data) => {
        user.token = data;
        this.userService.addUser(user).then((use) => {
          this.alert.success('Opération est réussie', 'Success');
          this.router.navigate(['./../login']);
        });
      });
    }
  }
}
