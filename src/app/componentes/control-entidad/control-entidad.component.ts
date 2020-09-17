import {Component, OnInit} from '@angular/core';
import {Usuario} from "../../clases/usuario";
import {UsuariosService} from '../../servicios/usuarios.service';

@Component({
  selector: 'app-control-entidad',
  templateUrl: './control-entidad.component.html',
  styleUrls: ['./control-entidad.component.css']
})
export class ControlEntidadComponent implements OnInit {
  listadoPrincipal: Usuario[] = [];
  selectedItem: Usuario;


  constructor(private usuarios: UsuariosService) {
  }

  ngOnInit(): void {
    this.usuarios.obtenerUsers().subscribe(
      (data: Usuario[]) => {
        this.listadoPrincipal = data;
      },
      (err: Error) => {
        console.log("Fail service", err);
      }
    );
  }

  onEventSelectedItem(usuario) {
    this.selectedItem = usuario
  }

  onEventDeletedItem($event: Usuario) {
    this.listadoPrincipal = this.listadoPrincipal.filter((p) => p != $event);
    this.selectedItem = null;
    console.log("deleted: ", $event);

  }
}
