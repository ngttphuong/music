import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/common';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { localStorageName, ResponseStatusCodes } from '../shared/constants';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  loading = false;
  submitted = false;
  returnUrl: string = '';
  isAccountAuthFailed: boolean = false;
  isRemembered = false;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.authService.signOut();
  }
      // convenience getter for easy access to form fields
      get f() { return this.loginForm.controls; }

      onSubmit() {
          this.submitted = true;
  
          // stop here if form is invalid
          if (this.loginForm.invalid) {
              return;
          }
          this.loading = true;
          this.authService.login(this.f.username.value, this.f.password.value)
              .pipe(first())
              .subscribe(
                  (data: any) => {
                      this.router.navigate([this.returnUrl]);
                  },
                  (_error: any) => {
                    if ( _error.status == ResponseStatusCodes.unauthorized ) {
                      this.isAccountAuthFailed = true;
                    }
                      this.loading = false;
                  });
      }
}
