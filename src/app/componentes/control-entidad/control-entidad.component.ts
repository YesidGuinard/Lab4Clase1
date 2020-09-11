import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../clases/usuario";
import { UsuariosService } from '../../servicios/usuarios.service';

@Component({
  selector: 'app-control-entidad',
  templateUrl: './control-entidad.component.html',
  styleUrls: ['./control-entidad.component.css']
})
export class ControlEntidadComponent implements OnInit {
  usuario = new Usuario();
  listadoPrincipal: any;


  constructor(private usuarios:UsuariosService) { }

  ngOnInit(): void {
    this.usuarios.obtenerUsers().subscribe(resultado => {
      console.log('Resultado Usuarios');
      console.log(resultado);
      this.listadoPrincipal=resultado;
    }, error => {
      console.log('Error');
    });

  }

}
