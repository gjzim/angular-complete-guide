import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
})
export class ReversePipe implements PipeTransform {
  transform(value: unknown): unknown {
    if (typeof value === 'string') {
      return value.split('').reverse().join('');
    }

    if (Array.isArray(value)) return value.reverse();

    return value;
  }
}
