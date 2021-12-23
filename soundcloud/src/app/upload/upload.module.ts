import { NgModule } from "@angular/core";
import {AuthService, FileService} from "../shared/services/common";
import { UploadComponent } from "./upload.component";

@NgModule({
    imports: [
    ],
    providers: [AuthService, FileService],
    declarations: [UploadComponent],
    exports: [UploadComponent]
})

export class UploadModule { }