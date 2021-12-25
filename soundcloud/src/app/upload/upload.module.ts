import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import {AuthService, FileService} from "../shared/services/common";
import { UploadService } from "../shared/services/upload/upload.service";
import { UploadComponent } from "./upload.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserModule
    ],
    providers: [UploadService],
    declarations: [UploadComponent],
    exports: [UploadComponent]
})

export class UploadModule { }