import { LoginService } from './../../service/login.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ShowErrorsComponent } from './../show-errors.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup; insert: any;
  login: any;
  submitted: boolean = false;
  saved: boolean = false;
  alertMessage: string;
  alertClass: string;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email, Validators.maxLength(75)]),
      password: new FormControl("", [Validators.required, Validators.minLength(6)]),
    })
  }

  onSubmit() {
    this.SubmitForm();
  }

  SubmitForm() {
    this.submitted = true;
    var data = new FormData();
    data.append("email", this.form.get("email").value.trim());
    data.append("password", this.form.get("password").value.trim());
    this.loginService.loginCheck(data)
      .subscribe(
        (formdata) => {
          this.login = formdata;
          if (this.login.is_logged_in) {
            localStorage.setItem('is_logged_in', this.login.is_logged_in);
            localStorage.setItem('user_id', this.login.user_id);
            localStorage.setItem('first_name', this.login.firstname);
            localStorage.setItem('last_name', this.login.lastname);
            localStorage.setItem('email', this.login.email);

            this.router.navigate(['/']);
            // this.alertMessage = "Details Submitted Successfully.";
            // this.alertClass = "alert-success";
            // this.form.reset();
          } else {
            this.saved = true;
            this.alertMessage = "Email or Password is incorrect";
            this.alertClass = "alert-danger";
          }
          this.submitted = false;
        }
      );
  }

  removeAlert() {
    this.saved = false;
  }

}
