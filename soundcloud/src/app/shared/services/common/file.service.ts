import {Injectable} from '@angular/core';
import { Angular2Csv } from 'src/assets/scripts/Angular2-csv/Angular2-csv';

@Injectable()
export class FileService {

    /**
     * Download a file with received blob data type
     * @param {any} data
     * @param {string} fileName
     * @param {string} fileType - actually it's MIME type
     */
    downloadBinaryFile(data: any, fileName: string, fileType: string): void {
        this.downloadFile(data, fileName, fileType);
    }

    /**
     * download a CSV file
     * @param data - 2 dimensions string array
     * @param fileName - should contain ".csv" extension
     */
    downloadCSVFile(data: (string[][] | {}), fileName: string): void {
        let dataCsv: Angular2Csv = new Angular2Csv( data, fileName );
        this.downloadFile(dataCsv.csv, dataCsv.fileName, "text/csv");
    }

    private downloadFile(data: any, fileName: string, fileType: string) {
        const blob = new Blob( [data], { type: fileType });
        const isChromeIOS = navigator.userAgent.match( 'CriOS' );
        if ( isChromeIOS ) {
            const reader = new FileReader();
            reader.onloadend = function() { window.open( reader.result as string ); };
            reader.readAsDataURL( blob );
        } else {
            const url = window.URL.createObjectURL( blob );
            const aTag: HTMLElement = document.createElement( "a" );
            document.body.appendChild( aTag );
            aTag.setAttribute( "href", url );
            aTag.setAttribute( "visibility", "hidden" );
            aTag.setAttribute( "download", fileName );
            aTag.click();
            setTimeout(() => {
                window.URL.revokeObjectURL( url );
            }, 1000 );
            aTag.remove();
        }
    }
}
