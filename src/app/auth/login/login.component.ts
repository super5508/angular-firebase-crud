import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  loading: boolean;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private snackBar: MatSnackBar
  ) {
    this.buildForm();
  }

  ngOnInit() {
  }

  buildForm() {
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    });
  }

  onLogin(event: Event) {
    event.preventDefault();
    this.loading = true;

    this.auth.login(this.form.value).then(res => {
      this.snackBar.open('Welcome', 'Close', {duration : 3000});
    }).catch(err => {
      this.snackBar.open(err.message, 'Try again!', {duration : 2000});
    }).finally(() => this.loading = false);
  }

}
