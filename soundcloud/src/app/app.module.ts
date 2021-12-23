import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './discover/profile/profile.component';
import { DiscoverComponent } from './discover/discover.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { UploadComponent } from './upload/upload.component';
import { SignupComponent } from './signup/signup.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { DiscoverModule } from './discover/discover.module';
import { ProfileModule } from './discover/profile/profile.module';
import { UploadModule } from './upload/upload.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LocalStorageService, StringService } from './shared/services/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignupComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    DiscoverModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [StringService, LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
