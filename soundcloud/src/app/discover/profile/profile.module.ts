import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LocalStorageService } from "src/app/shared/services/common";
import { ProfileService } from "src/app/shared/services/profile/profile.service";
import { ApiService } from "../../shared/services/common/api.service";
import { AuthService } from "../../shared/services/common/auth.service";
import { FileService } from "../../shared/services/common/file.service";
import { GuardService } from "../../shared/services/common/guard.service";
import { JwtService } from "../../shared/services/common/jwt.service";
import { AlbumModule } from "./album/album.module";
import { PlaylistModule } from "./playlist/playlist.module";
import { ProfileComponent } from "./profile.component";
import { SongModule } from "./song/song.module";

@NgModule({
    imports: [
        AlbumModule,
        PlaylistModule,
        SongModule,
        RouterModule,
        CommonModule
    ],
    providers:[ProfileService, LocalStorageService],
    declarations: [ProfileComponent],
    exports: [ProfileComponent]
})

export class ProfileModule { }