import {Injectable} from '@angular/core';
import {ApiConfig} from './api-config';

@Injectable()
export class ApiService {

    api: ApiConfig;

    constructor() {
        this.api = this.urlConfig();
    }

    urlConfig() {
       return {
            user: 'login?'
       };
    }
}