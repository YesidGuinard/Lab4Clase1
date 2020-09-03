import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html',
  styleUrls: ['./ejercicios.component.css']
})
export class EjerciciosComponent implements OnInit {

  title = 'Ejercicio Clase 01 Yesid Dario Guinard';

  public edadUno: string = "0";
  public edadDos: string = "0";
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
    this.edadUno = "0";
    this.edadDos = "0";
    this.ResultadoSuma = "";
    this.ResultadoPromedio = "";
  }


}
