import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/usuarios/usuarios.service';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent implements OnInit {
  dataCard: any=[];
  paginador=1;

  constructor(private servicesUser: UsuariosService) { }

  ngOnInit(): void {
    this.listaUsuarios();
  }

  listaUsuarios(){
    this.servicesUser.fotos().toPromise().then(resp=>{
      this.dataCard = resp
    });
  }
}
