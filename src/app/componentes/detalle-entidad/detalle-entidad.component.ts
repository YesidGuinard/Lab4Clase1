import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Usuario} from "../../clases/usuario";

@Component({
  selector: 'app-detalle-entidad',
  templateUrl: './detalle-entidad.component.html',
  styleUrls: ['./detalle-entidad.component.css']
})
export class DetalleEntidadComponent implements OnInit {
  @Input() selectedItem: Usuario;
  @Output() eventDeleteItem: EventEmitter<Usuario> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteUsuario(user: Usuario) {
    this.eventDeleteItem.emit(user)
  }

}
