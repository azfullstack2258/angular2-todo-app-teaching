import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sepWord'
})
export class SepWordPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let _splitString = value.split(" ", args);
    return _splitString.join(" ");
  }

}
