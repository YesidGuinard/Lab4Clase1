import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ejercicio Clase 01 Yesid Dario Guinard';

  public edadUno: string = "";
  public edadDos: string = "";
  public ResultadoSuma: string = "";
  public ResultadoPromedio: string = "";
  constructor() { }

  ngOnInit() {
  }

  CalcularClick() {
    this.ResultadoSuma = (parseFloat(this.edadUno) + parseFloat(this.edadDos)).toString();
    this.ResultadoPromedio = ((parseFloat(this.edadUno) + parseFloat(this.edadDos)) / 2.0).toString();
  }

  LimpiarClick() {
    this.edadUno = "";
    this.edadDos = "";
    this.ResultadoSuma = "";
    this.ResultadoPromedio = "";
  }


}

