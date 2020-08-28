import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-dream-app';

  public edad1 = "";
  public edad2 = "";
  public ResultadoSuma= "";
  public ResultadoPromedio= "";
  constructor() { }

  ngOnInit() {
  }

  CalcularClick() {
    this.ResultadoSuma = (parseFloat(this.edad1) + parseFloat(this.edad2)).toString();
    this.ResultadoPromedio = ((parseFloat(this.edad1) + parseFloat(this.edad2))/2.0).toString();
  }
  
  LimpiarClick() {
    this.edad1 = "";
    this.edad2 = "";
    this.ResultadoSuma = "";
    this.ResultadoPromedio = "";
  }
  

}

