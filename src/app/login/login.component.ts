import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'Login Clase 01 Yesid Dario Guinard';
  constructor() { }
  usuario = new Usuario();
  ngOnInit(): void {
   
  }
  Ingresar() {
   
  }

}
