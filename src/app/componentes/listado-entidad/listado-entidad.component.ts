import {Component, EventEmitter,Input, OnInit,Output} from '@angular/core';
import {Usuario} from "../../clases/usuario";
@Component({
  selector: 'app-listado-entidad',
  templateUrl: './listado-entidad.component.html',
  styleUrls: ['./listado-entidad.component.css']
})
export class ListadoEntidadComponent implements OnInit {
  @Input() listadoUsuarios: Usuario[];
  @Output() eventSelectedItem : EventEmitter<Usuario> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log(this.listadoUsuarios);

  }
  onSelectUsuario(user:Usuario){
    this.eventSelectedItem.emit(user);
    console.log("user select: " ,user);
  }
}
