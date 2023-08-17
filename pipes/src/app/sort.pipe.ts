import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(value: any[], key: string): any[] {
    value = value.slice();
    value.sort((a, b) => (a[key] > b[key] ? -1 : 1));
    return value;
  }
}
