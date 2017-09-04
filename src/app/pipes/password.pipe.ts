import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: any, args1: boolean = true): any {
    let resultado:string = "";
    if(args1){
      for (var i = 0; i < value.length; i++) {

        resultado += '*';  
      }
    }else{
      resultado = value;
    }

    return resultado;
  }

}
