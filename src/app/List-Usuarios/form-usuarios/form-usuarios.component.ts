import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from 'src/app/usuarios/usuarios.service';

@Component({
  selector: 'app-form-usuarios',
  templateUrl: './form-usuarios.component.html',
  styleUrls: ['./form-usuarios.component.css']
})
export class FormUsuariosComponent implements OnInit {
  id: any;
  informacion: any=[];
  paginador = 1;
  dataTable: any=[];

  constructor(private actRoute: ActivatedRoute, private servicesUser: UsuariosService) { 
    this.id = this.actRoute.snapshot.params
  }

  ngOnInit(): void {
    this.listaIDUsuarios();
  }

  listaIDUsuarios(){
    this.servicesUser.obtenerID(Number(this.id.id)).toPromise().then(resp=>{
      this.informacion = resp;
      this.listaPosts(resp.id);
    });
  }

  listaPosts(id:any){
    this.dataTable = [];
    this.servicesUser.obtenerPost().toPromise().then(resp=>{
      for (let index = 0; index < resp.length; index++) {
        const element = resp[index];
        if(id == element.userId){
          this.dataTable.push(element);
        }
      }
    });
  }

}
