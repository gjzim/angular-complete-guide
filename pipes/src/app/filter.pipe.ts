import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], filterString: string, propName: string): any[] {
    if (filterString === '' || value.length === 0) {
      return value;
    }

    return value.filter((item: any) => item[propName] === filterString);
  }
}
