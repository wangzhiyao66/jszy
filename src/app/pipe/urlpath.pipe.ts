import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'urlpath'
})
export class UrlpathPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
