import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { CryptoService } from "../shared/services/common";
import { AlbumModule } from "./album/album.module";
import { PlaylistModule } from "./playlist/playlist.module";
import { PrivateWallComponent } from "./private-wall.component";
import { ProfileModule } from "./profile/profile.module";
import { SongModule } from "./song/song.module";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        CommonModule,
        ProfileModule,
        AlbumModule,
        PlaylistModule,
        SongModule,
        ReactiveFormsModule,
        RouterModule

    ],
    providers: [ CryptoService],
    declarations: [PrivateWallComponent],
    exports: [PrivateWallComponent]
})

export class PrivateWallModule { }