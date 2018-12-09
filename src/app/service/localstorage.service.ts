// 王治尧 12-05
import {Injectable} from '@angular/core';

@Injectable()
export class LocalstorageService {

    setUserData(value: any[] | object) {
        localStorage.setItem('user', JSON.stringify(value));
    }

    getUserData() {
        try {
            return JSON.parse(localStorage.getItem('user'));
        } catch (e) {
            return null;
        }
    }

    setObject(key, val): void {
        localStorage.setItem(key, JSON.stringify(val));
    }

    getObject(key): any {
        try {
            return JSON.parse(localStorage.getItem(key));
        } catch (e) {
            return null;
        }
    }


}
