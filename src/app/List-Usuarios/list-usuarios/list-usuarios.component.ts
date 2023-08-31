import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/usuarios/usuarios.service';

@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html',
  styleUrls: ['./list-usuarios.component.css']
})
export class ListUsuariosComponent implements OnInit {

  paginador=1;
  p=1;
  filter='';
  dataTable: any=[];
  constructor(private servicesUser: UsuariosService) { }

  ngOnInit(): void {
    this.listaUsuarios();
  }

  listaUsuarios(){
    this.servicesUser.listUser().toPromise().then(resp=>{
      this.dataTable = resp
    });
  }

  

}
