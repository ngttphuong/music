import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthService } from '../shared/services/common';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      passwordConfirm: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }
  onSubmit() {
      this.submitted = true;
      // stop here if form is invalid
      if (this.form.invalid) {
          return;
      }
      this.loading = true;
      this.authService.register(this.form.value)
          .pipe(first())
          .subscribe(
              (data: any) => {
                  this.router.navigate(['../sign-in'], { relativeTo: this.route });
              },
              (error: any) => {
                console.log(error);
                this.loading = false;
              });
  }

}
