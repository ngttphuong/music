import { Routes } from "@angular/router";
import { AlbumComponent } from "./album/album.component";
import { PlaylistComponent } from "./playlist/playlist.component";
import { ProfileComponent } from "./profile.component";
import { SongComponent } from "./song/song.component";

export const ProfileRoutes: Routes = [
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
    }
];