import { NgModule } from '@angular/core';
import { UploadComponent } from 'src/app/upload/upload.component';
import { SongComponent } from './song.component';

@NgModule( {
    imports: [
       
    ],
    declarations: [SongComponent],
    exports: [SongComponent]
})

export class SongModule { }