import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-dream-app';

public ejemplo = 'Hola Mundo';
public ejemplo2 = 'Hola Mundo';
constructor() { }

ngOnInit() {
}

PruebaClick() {
  this.ejemplo2 = 'Ejecutamos el evento!!!';
}

}

