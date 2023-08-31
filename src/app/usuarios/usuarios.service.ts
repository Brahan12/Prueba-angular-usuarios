import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from '../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient, private cs: ConfigService) { }

  // SERVICIOS PARA OBTENER LISTA DE USUARIOS
  listUser(){
    return this.http.get<any>(`${this.cs.base}users`);
  }

   // SERVICIOS PARA OBTENER INFORMACION CON ID DEL USUARIO
   obtenerID(id:any){
    return this.http.get<any>(`${this.cs.base}users/${id}`);
  }

   // SERVICIOS PARA OBTENER INFORMACION DE LOS POSTS
   obtenerPost(){
    return this.http.get<any>(`${this.cs.base}posts`);
  }

   // SERVICIOS PARA OBTENER INFORMACION DE LOS COMENTARIOS DEL POSTS
   obtenerComment(id:any){
    return this.http.get<any>(`${this.cs.base}posts/${id}/comments`);
  }

  // SERVICIOS PARA OBTENER INFORMACION DE LOS COMENTARIOS DEL POSTS
  fotos(){
    return this.http.get<any>(`${this.cs.base}photos`);
  }

  // SERVICIOS PARA OBTENER INFORMACION DE LOS COMENTARIOS DEL POSTS
  fotosDescripcion(id:any){
    return this.http.get<any>(`${this.cs.base}photos/${id}`);
  }
}
