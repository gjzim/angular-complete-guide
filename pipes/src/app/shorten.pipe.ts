import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten',
})
export class ShortenPipe implements PipeTransform {
  transform(value: any, limit = 10) {
    return value.length > limit ? value.substr(0, 10) + '...' : value;
  }
}
