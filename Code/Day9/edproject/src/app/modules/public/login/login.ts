import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth-service';
import { User } from '../../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  loginfrm: FormGroup;
  authService = inject(AuthService);
  failed: boolean = false;
  cdr = inject(ChangeDetectorRef);
  router = inject(Router);

  constructor(private fb: FormBuilder) {
    this.loginfrm = this.fb.group({
      userName: this.fb.control('', [Validators.required]),
      password: this.fb.control('', [Validators.required])
    })
  }

  validateLogin() {
    if (this.loginfrm.valid) {
      this.authService.validateUser(this.loginfrm.value).subscribe({
        next: (resp) => {
          if (resp.body != null) {
            const user: User = resp.body;
            this.authService.SetAuthUser(user);
            this.failed = false;
            if (user.roles && user.roles?.indexOf("Admin") >= 0) {
              this.router.navigate(['/admin']);
            }
            else if (user.roles && user.roles?.indexOf("User") >= 0) {
              this.router.navigate(['user']);
            }
          }
          else {
            this.failed = true;
            this.cdr.detectChanges();
          }
        },
        error: (err) => {

        }
      })
    }
  }
}
