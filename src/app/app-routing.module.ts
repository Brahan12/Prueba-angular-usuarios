import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsuariosComponent } from './List-Usuarios/list-usuarios/list-usuarios.component';
import { FormUsuariosComponent } from './List-Usuarios/form-usuarios/form-usuarios.component';
import { ComentariosComponent } from './List-Usuarios/comentarios/comentarios.component';
import { FotosComponent } from './List-Usuarios/fotos/fotos.component';
import { DescripcionFotosComponent } from './List-Usuarios/Fotos/descripcion-fotos/descripcion-fotos.component';

const routes: Routes = [
  {
    path: '',
    component: ListUsuariosComponent
  },
  {
    path: 'info/:id',
    component: FormUsuariosComponent
  },
  {
    path: 'info/:id/comentario/:id',
    component: ComentariosComponent
  },
  {
    path: 'Fotos',
    component: FotosComponent
  },
  {
    path: 'Fotos/descripcion/:id',
    component: DescripcionFotosComponent
  },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
