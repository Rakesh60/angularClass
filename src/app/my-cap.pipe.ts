import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCap'
})
export class MyCapPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): any {
    
    const res =value.split(' ').map(val => val.slice(0, 1).toLocaleUpperCase() + val.slice(1)).join(' ');
    //console.log(res)
    return res;
  }

}
