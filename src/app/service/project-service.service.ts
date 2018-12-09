import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {LocalstorageService} from './localstorage.service';
import {catchError} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {ResponsesData} from '../interface/responses-data';

@Injectable()
export class ProjectServiceService {

    constructor(private http: HttpClient,
                private localstorageService: LocalstorageService
    ) {
    }

    /**
     *  http 示例
     *  id 数字类型
     */
    getProjectLists(id: number) {
        return this.http.post<ResponsesData>('project/search', id)
            .pipe(
                catchError(this.handleError)
            );
    }

    /**
     * 错误处理器
     */
    private handleError(error: HttpErrorResponse) {

        let errorMsg = '';

        if (error.error instanceof ErrorEvent) {
            console.error('客户端的错误：', error);
            errorMsg = '客户端的错误。';
        } else {
            console.error(`服务器的错误: `, error);
            if ( error.error === 'access_denied') {
                errorMsg = '无操作权限。';
            } else {
                errorMsg = error.error;
            }
        }
        // 这里抛出去的错，最后会返回到接口的error回调中
        return Observable.throw(errorMsg);
    }
}
