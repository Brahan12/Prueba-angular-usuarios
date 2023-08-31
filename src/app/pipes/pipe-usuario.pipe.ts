import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeUsuario'
})
export class PipeUsuarioPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const result =[];

    if(value != '' && value != null){
      debugger
      for(const post of value){
        if(post.name.toLowerCase().includes(args[0].trim().toLowerCase())){
          result.push(post)
        }else if(post.id.toLowerCase().includes(args[0].trim().toLowerCase())){
          result.push(post)
        }
      }
    }
    return result;
  }

}
