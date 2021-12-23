import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CryptoService } from "../shared/services/common";
import { SignupComponent } from "./signup.component";

@NgModule({
    imports: [
        FormsModule
    ],
    providers: [ CryptoService],
    declarations: [SignupComponent],
    exports: [SignupComponent]
})

export class SignUpModule { }