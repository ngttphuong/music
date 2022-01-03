import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CryptoService } from "../shared/services/common";
import { SignInComponent } from "./sign-in.component";

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule
    ],
    providers: [ CryptoService],
    declarations: [SignInComponent],
    exports: [SignInComponent]
})

export class SignInModule { }