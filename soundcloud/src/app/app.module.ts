import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { DiscoverModule } from './discover/discover.module';
import { ProfileModule } from './private-wall/profile/profile.module';
import { UploadModule } from './upload/upload.module';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SignUpModule } from './signup/signup.module';
import { SignInModule } from './sign-in/sign-in.module';
import { PrivateWallModule } from './private-wall/private-wall.module';
import { StringService } from './shared/services/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    DiscoverModule,
    UploadModule,
    ProfileModule,
    SignUpModule,
    SignInModule,
    PrivateWallModule,
    // RouterModule.forRoot(routes,{ useHash: true })
    // .forRoot(routes, { useHash: true }),
  ],
exports: [RouterModule],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '/'
},StringService],
  bootstrap: [AppComponent]
})
export class AppModule { }
