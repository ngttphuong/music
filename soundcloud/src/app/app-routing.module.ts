import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscoverComponent } from './discover/discover.component';
import { DiscoverRoutes } from './discover/discover.routes';
import { AlbumComponent } from './discover/profile/album/album.component';
import { PlaylistComponent } from './discover/profile/playlist/playlist.component';
import { ProfileComponent } from './discover/profile/profile.component';
import { ProfileRoutes } from './discover/profile/profile.routes';
import { SongComponent } from './discover/profile/song/song.component';
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
  {
    path: 'profile',
    component: ProfileComponent,
    children: [
        {
            path: 'track',
            component: SongComponent,
            pathMatch: 'full'
        },
        {
            path: 'album',
            component: AlbumComponent,
            pathMatch: 'full'
        },
        {
            path: 'playlist',
            component: PlaylistComponent,
            pathMatch: 'full'
        }
    ],
    canActivate: [GuardService]
  },
  ...UploadRoutes,
  ...SignInRoutes,
  ...SignUpRoutes
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
