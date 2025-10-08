import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BuscarCartasService {
  private url = 'https://api.scryfall.com/cards/';

  constructor(private http: HttpClient) {}

  realizarBusqueda(
    paramsObj: { [key: string]: string },
    accion: string
  ): Observable<any> {
    const params = new HttpParams({ fromObject: paramsObj });
    return this.http.get<any>(this.url + accion, { params });
  }

  buscarCartasPorNombre(nombre: string): Observable<any> {
    const params = { q: nombre };
    return this.realizarBusqueda(params, 'search');
  }

  obtenerCartaCompleta(nombre: string): Observable<any> {
    const params = { exact: nombre };
    return this.realizarBusqueda(params, 'named');
  }
}
