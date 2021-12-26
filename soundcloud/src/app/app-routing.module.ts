import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DiscoverComponent } from './discover/discover.component';
import { DiscoverRoutes } from './discover/discover.routes';
import { AlbumComponent } from './private-wall/album/album.component';
import { PlaylistComponent } from './private-wall/playlist/playlist.component';
import { PrivateWallRoutes } from './private-wall/private-wall.routes';
import { ProfileComponent } from './private-wall/profile/profile.component';
import { ProfileRoutes } from './private-wall/profile/profile.routes';
import { SongComponent } from './private-wall/song/song.component';
import { GuardService } from './shared/services/common';
import { SignInRoutes } from './sign-in/sign-in.routes';
import { SignUpRoutes } from './signup/signup.routes';
import { UploadComponent } from './upload/upload.component';
import { UploadRoutes } from './upload/upload.roures';

 const routes: Routes = [
  { path: '', redirectTo: 'discover', pathMatch: 'full' },
  {
    path: 'discover',
    component: DiscoverComponent,
    canActivate: [GuardService]
  },
  // {
  //   path: 'profile',
  //   component: ProfileComponent,
  //   children: [
  //       {
  //           path: 'song',
  //           component: SongComponent,
  //           pathMatch: 'full'
  //       },
  //       {
  //           path: 'album',
  //           component: AlbumComponent,
  //           pathMatch: 'full'
  //       },
  //       {
  //           path: 'playlist',
  //           component: PlaylistComponent,
  //           pathMatch: 'full'
  //       }
  //   ],
  //   canActivate: [GuardService]
  // },
  ...PrivateWallRoutes,
  ...UploadRoutes,
  ...SignInRoutes,
  ...SignUpRoutes
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
