import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { CustomValidators } from 'src/app/shared/validators/custom-validators';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  form: FormGroup;
  loading: boolean;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService
  ) {
    this.buildForm();
  }

  ngOnInit() {
  }

  buildForm() {
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      compare: [null, [
        Validators.required,
        // CustomValidators.passwordsMatch(this.form.get('password').value, this.form.get('compare').value).bind(this)
      ]]
    });
  }

  onSignUp(event: Event) {
    event.preventDefault();

    this.loading = true;

    this.auth.signUp(this.form.value);

    this.loading = false;
  }
}
