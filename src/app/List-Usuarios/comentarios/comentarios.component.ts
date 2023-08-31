import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from 'src/app/usuarios/usuarios.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {
  id: any;
  dataTable: any=[];
  paginador=1;

  constructor(private actRoute: ActivatedRoute, private servicesUser: UsuariosService, private _location: Location) { 
    this.id = this.actRoute.snapshot.params
  }

  ngOnInit(): void {
    this.listaComentarios();
  }

  listaComentarios(){
    this.servicesUser.obtenerComment(this.id.id).toPromise().then(resp=>{
      this.dataTable=resp;
    });
  }

  volver(){
    this._location.back();
  }

}
