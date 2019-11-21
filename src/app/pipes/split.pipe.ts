import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'split'
})
export class SplitPipe implements PipeTransform {

  transform(value, args: string[] = null): any {
    if (value !== undefined) {
      if (typeof value === 'object') {
        let keys = [];
        for (let key in value) {
          keys.push(key);
        }
        return keys;
      }
      else {
        return value.split(',');
      }
    }
  }

}
