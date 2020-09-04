import {Component, OnInit} from '@angular/core';
import {Usuario} from '../clases/usuario';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'Login Clase 01 Yesid Dario Guinard';
  usuario = new Usuario();

  constructor(private route: Router) {
  }

  ngOnInit(): void {
    this.usuario.email = 'admin@mail.com';
    this.usuario.pass = 'admin';
  }

  Ingresar() {

    if (this.usuario.email === 'admin@mail.com' && this.usuario.pass === 'admin') {
      this.route.navigate(['dash']);
    } else {
      this.route.navigate(['error']);
    }
  }

}
