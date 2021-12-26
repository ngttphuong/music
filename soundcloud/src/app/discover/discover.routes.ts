import { Routes } from "@angular/router";
import { GuardService } from "../shared/services/common";
import { UploadComponent } from "../upload/upload.component";
import { DiscoverComponent } from "./discover.component";
import { ProfileRoutes } from "../private-wall/profile/profile.routes";

export const DiscoverRoutes: Routes = [
    {
        path: 'discover',
        component: DiscoverComponent,
        canActivate: [GuardService]
    }
];