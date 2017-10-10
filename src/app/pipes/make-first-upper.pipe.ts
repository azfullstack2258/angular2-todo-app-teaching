import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'makeFirstUpper'
})
export class MakeFirstUpperPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let _splitString = value.split(" ");
    for(let i in _splitString) {
      _splitString[i] = _splitString[i].charAt(0).toUpperCase() + _splitString[i].slice(1);
      console.log(_splitString[i], "->>>>>")
    }
    return _splitString.join(" ");
  }

}
