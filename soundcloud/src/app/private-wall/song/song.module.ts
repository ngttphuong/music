import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SongService } from 'src/app/shared/services/songs/song.service';
import { UploadComponent } from 'src/app/upload/upload.component';
import { SongComponent } from './song.component';

@NgModule( {
    imports: [
    ],
    providers:[SongService],
    declarations: [SongComponent],
    exports: [SongComponent]
})

export class SongModule { }