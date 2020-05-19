import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'converter'
})
export class ConverterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value ? value / 1.6 : null;
  }
}
