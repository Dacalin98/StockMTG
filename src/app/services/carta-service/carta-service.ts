import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Carta } from '../../models/carta.model';

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
    const params = { q: nombre, unique: 'cards' ,lang: 'es'};
    return this.realizarBusqueda(params, 'search').pipe(
      map((response: any) => response.data || []),
      map((data: any[]) => data.map((cartaData) => new Carta(cartaData)))
    );
  }
  
  obtenerCartaCompleta(nombre: string): object {
    const params = { exact: nombre };
    return this.realizarBusqueda(params, 'named');
  }
}
