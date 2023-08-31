import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ListUsuariosComponent } from './List-Usuarios/list-usuarios/list-usuarios.component';
import { PipeUsuarioPipe } from './pipes/pipe-usuario.pipe';
import { FormUsuariosComponent } from './List-Usuarios/form-usuarios/form-usuarios.component';
import { ComentariosComponent } from './List-Usuarios/comentarios/comentarios.component';
import { FotosComponent } from './List-Usuarios/fotos/fotos.component';
import { DescripcionFotosComponent } from './List-Usuarios/Fotos/descripcion-fotos/descripcion-fotos.component';

@NgModule({
  declarations: [
    AppComponent,
    ListUsuariosComponent,
    PipeUsuarioPipe,
    FormUsuariosComponent,
    ComentariosComponent,
    FotosComponent,
    DescripcionFotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    
  ],
  exports:[
    // PipeUsuarioPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
