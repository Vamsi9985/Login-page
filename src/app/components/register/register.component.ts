import { RegisterService } from './../../service/register.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ShowErrorsComponent } from './../show-errors.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  insert: any;
  submitted: boolean = false;
  saved: boolean = false;
  alertMessage: string;
  alertClass: string;

  constructor(
    private registerService: RegisterService
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      first_name: new FormControl("", [Validators.required, Validators.pattern("[a-zA-Z ]+"), Validators.minLength(2), Validators.maxLength(75)]),
      last_name: new FormControl("", [Validators.required, Validators.pattern("[a-zA-Z ]+"), Validators.minLength(2), Validators.maxLength(75)]),
      email: new FormControl("", [Validators.required, Validators.email, Validators.maxLength(75)]),
      password: new FormControl("", [Validators.required, Validators.minLength(6)]),
      phone: new FormControl("", [Validators.required, Validators.pattern("[0-9]+"), Validators.minLength(7), Validators.maxLength(12)]),
      address: new FormControl("", [Validators.required, Validators.minLength(5)])
    })
  }

  onSubmit() {
    this.SubmitForm();
  }

  SubmitForm() {
    this.submitted = true;
    var data = new FormData();
    data.append("first_name", this.form.get("first_name").value.trim());
    data.append("last_name", this.form.get("last_name").value.trim());
    data.append("email", this.form.get("email").value.trim());
    data.append("phone", this.form.get("phone").value.trim());
    data.append("address", this.form.get("address").value.trim());
    data.append("password", this.form.get("password").value.trim());
    this.registerService.addUser(data)
      .subscribe(
        (formdata) => {
          this.insert = formdata;
          if (this.insert.status == 1) {
            this.alertMessage = "Details Submitted Successfully.";
            this.alertClass = "alert-success";
            this.form.reset();
          } else {
            this.alertMessage = "Details Submition Failed.";
            this.alertClass = "alert-danger";
          }
          this.submitted = false;
          this.saved = true;
        }
      );
  }

  removeAlert() {
    this.saved = false;
  }

}
