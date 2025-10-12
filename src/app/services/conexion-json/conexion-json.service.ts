import { Injectable } from '@angular/core';
import { Carta } from '../../models/carta.model';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ConexionJSONService {
  private url = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  actualizarOAnadir(carta: Carta) {
    const params = {
        carta:JSON.stringify(carta)    };
    return this.http.post<any>(this.url + 'actualizarCarta', params);
  }

  obtenerTodas() {
    return this.http.get<any>(this.url + 'cartas');
  }

}