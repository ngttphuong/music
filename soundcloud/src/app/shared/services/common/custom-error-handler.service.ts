import { ErrorHandler, Injectable, Injector, isDevMode } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import {  LocalStorageService } from '.';
import {
    appReloadingMessage,
    localStorageName
} from '../../constants';

@Injectable()
export class CustomErrorHandler implements ErrorHandler {
    

    constructor( private injector: Injector ,
        // private apiService: ApiService,
        private localStorageService: LocalStorageService,) { }

    /**
     * Handle error for different modes
     * 
     * @param {Error} error
     * @return {void}
     */
    handleError( error: Error ): void {

        if ( !error || !error.stack ) {
            return;
        }

        this.localStorageService = this.injector.get( LocalStorageService );
        // this.apiService = this.injector.get( this.apiService );
        // this.errorLogsService = this.injector.get( ErrorLogService );

        // let errorMessage: string = this.errorLogsService.generateErrorMessage( error.stack );
        // let logApiResource: Observable<number> = this.errorLogsService.sendErrorLog( errorMessage ).pipe(
        //     finalize(
        //         () => {
        //             let isAppRunning: boolean = this.localStorageService.getBooleanItem( localStorageName.isAppRunning );
        //             if ( isAppRunning ) {
        //                 this.localStorageService.setBooleanItem( localStorageName.isAppRunning, false );
        //                 this.reloadApp();
        //             }
        //         }
        //     )
        // );

        // setTimeout( () => logApiResource.subscribe(
        //     () => {
        //     },
        //     error => {
        //         this.errorLogsService.backupErrorLogToStorage( errorMessage );
        //     }
        // ) );
    }

    private reloadApp(): void {
        window.location.replace( '' );
    }
}
