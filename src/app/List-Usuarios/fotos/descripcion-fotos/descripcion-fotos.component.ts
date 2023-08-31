import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from 'src/app/usuarios/usuarios.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-descripcion-fotos',
  templateUrl: './descripcion-fotos.component.html',
  styleUrls: ['./descripcion-fotos.component.css']
})
export class DescripcionFotosComponent implements OnInit {
  dataImagen: any;
  id: any;

  constructor(private servicesUser: UsuariosService, private actRoute: ActivatedRoute, private _location: Location) { 
    this.id = this.actRoute.snapshot.params
  }

  ngOnInit(): void {
    this.listaUsuarios();
  }

  listaUsuarios(){
    this.servicesUser.fotosDescripcion(this.id.id).toPromise().then(resp=>{
      this.dataImagen = resp
    });
  }

  volver(){
    this._location.back();
  }

}
