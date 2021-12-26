import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CryptoService } from "../shared/services/common";
import { SignupComponent } from "./signup.component";

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule
    ],
    providers: [ CryptoService],
    declarations: [SignupComponent],
    exports: [SignupComponent]
})

export class SignUpModule { }