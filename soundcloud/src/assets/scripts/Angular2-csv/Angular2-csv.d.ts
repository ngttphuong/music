export interface Options {
    filename: string;
    fieldSeparator: string;
    quoteStrings: string;
    decimalseparator: string;
    showLabels: boolean;
    showTitle: boolean;
    title: string;
    useBom: boolean;
}
export declare class CsvConfigConsts {
    static EOL: string;
    static BOM: string;
    static DEFAULT_FIELD_SEPARATOR: string;
    static DEFAULT_DECIMAL_SEPARATOR: string;
    static DEFAULT_QUOTE: string;
    static DEFAULT_SHOW_TITLE: boolean;
    static DEFAULT_TITLE: string;
    static DEFAULT_FILENAME: string;
    static DEFAULT_SHOW_LABELS: boolean;
    static DEFAULT_USE_BOM: boolean;
}
export declare const ConfigDefaults: Options;
export declare class Angular2Csv {
    fileName: string;
    labels: Array<String>;
    data: any[];
    private _options;
    csv: string;
    constructor(DataJSON: any, filename: string, options?: any);
    /**
     * Generate and Download Csv
     */
    private generateCsv();
    /**
     * Create Headers
     */
    getHeaders(): void;
    /**
     * Create Body
     */
    getBody(): void;
    /**
     * Format Data
     * @param {any} data
     */
    formartData(data: any): any;
    /**
     * Check if is Float
     * @param {any} input
     */
    isFloat(input: any): boolean;

}
