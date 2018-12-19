export interface ResponsesData {
    code: number | string;
    message: string;
    data: any;
    error?: string;
    total?: number;
    success?: string;
}
export interface OriginData {
    id: number;
    name: string;
    url: string;
    description: string;
}