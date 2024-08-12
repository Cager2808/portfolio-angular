import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'split'
})
export class SplitPipe implements PipeTransform {

  transform(value: string, ...args: any[]): any{
    if (!value) {
      return;
    }
    return value.split(" .");
  }

}
