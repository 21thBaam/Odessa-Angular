import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'adminUserPipe'
})
export class AdminUserPipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let fixedValue: string = "";
    if(value.length != 1){
      for(let i=0; i<value.length; i++){
        fixedValue += value[i];
        if(value.length != i){
          fixedValue += " ";
        }
      }
      return fixedValue;
    }
    return value;
  }

}
