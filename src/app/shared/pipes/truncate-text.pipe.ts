import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'truncateText'
})
export class TruncateTextPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (value.length > args) {
      return value.slice(0, args) + '...';
    }
    return value;

  }
}
