/**
 * Created by btb on 10/13/2017.
 */
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  email: string;
  password: string;
  mailControl = new FormControl('', [Validators.required]);
  passControl = new FormControl('', [Validators.required, Validators.minLength(3)]);
  constructor(@Inject(FormBuilder) fb: FormBuilder) {
    this.loginForm = fb.group({
      name: fb.group({
        mail: this.mailControl,
        password: this.passControl,
      }),
      email: '',
    });
  }

  ngOnInit() {

  }

  login() {
    alert("cli");
  }

}
