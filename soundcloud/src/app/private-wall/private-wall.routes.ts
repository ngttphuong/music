import { Routes } from "@angular/router";
import { GuardService } from "../shared/services/common";
import { UploadComponent } from "../upload/upload.component";
import { AlbumComponent } from "./album/album.component";
import { PlaylistComponent } from "./playlist/playlist.component";
import { PrivateWallComponent } from "./private-wall.component";
import { ProfileComponent } from "./profile/profile.component";
import { ProfileRoutes } from "./profile/profile.routes";
import { SongComponent } from "./song/song.component";

export const PrivateWallRoutes: Routes = [
    {
        path: 'a/:name',
        component: PrivateWallComponent,
        children: [
            {
                path: '',
                component: ProfileComponent
            } ,
            {
                path: 'song',
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
        ]
    }
];