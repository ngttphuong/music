import { Routes } from "@angular/router";
import { AlbumComponent } from "../album/album.component";
import { PlaylistComponent } from "../playlist/playlist.component";
import { ProfileComponent } from "./profile.component";
import { SongComponent } from "../song/song.component";

export const ProfileRoutes: Routes = [
    {
        path: 'profile',
        component: ProfileComponent
    }
];