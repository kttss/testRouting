import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minimiseText',
})
export class MinimiseTextPipe implements PipeTransform {
  transform(value: string, ...args: any[]): string {
    if (!args[0]) {
      args[0] = 100;
    }
    return value.length > args[0] ? value.substring(0, args[0]) + '...' : value;
  }
}
