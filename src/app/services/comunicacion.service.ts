import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Carta } from '../models/carta.model';

@Injectable({
  providedIn: 'root',
})
export class ComunicacionService {
  constructor() {}

  public cartaSeleccionada: Carta | null = null;

  cambiarCartaSeleccionada(carta: Carta) {
    this.cartaSeleccionada = carta;
    localStorage.setItem('cartaSeleccionada', JSON.stringify(carta));
  }
}
