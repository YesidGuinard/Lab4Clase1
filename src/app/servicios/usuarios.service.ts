import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private url = environment.urlUsers;

  constructor(private http: HttpClient) { }

  public obtenerUsers() {
    return this.http.get(this.url);
  }
}
