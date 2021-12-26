import { NgModule } from "@angular/core";
import { ApiService } from "../shared/services/common/api.service";
import { AuthService } from "../shared/services/common/auth.service";
import { FileService } from "../shared/services/common/file.service";
import { GuardService } from "../shared/services/common/guard.service";
import { JwtService } from "../shared/services/common/jwt.service";
import { DiscoverComponent } from "./discover.component";
import { ProfileModule } from "../private-wall/profile/profile.module";
import { UploadModule } from "./upload/upload.module";
import { RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
        UploadModule,
        ProfileModule,
        RouterModule,
        CommonModule
    ],
    providers: [ GuardService, ApiService, JwtService, AuthService, FileService],
    declarations: [DiscoverComponent],
    exports: [DiscoverComponent]
})

export class DiscoverModule { }