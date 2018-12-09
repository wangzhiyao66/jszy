export interface ResponsesData {
    code: number | string;
    message: string;
    data: any;
    error?: string;
    total?: number;
    success?: string;
}