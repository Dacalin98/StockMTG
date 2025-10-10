import { Component, Input } from '@angular/core';
import { Carta } from '../models/carta.model';
import { ComunicacionService } from '../services/comunicacion.service';
import { NgClass } from "@angular/common";

@Component({
  selector: 'app-carta-descripcion',
  imports: [NgClass],
  templateUrl: './carta-descripcion.component.html',
  styleUrl: './carta-descripcion.component.css',
})
export class CartaDescripcionComponent {
  constructor(private comunicacionService: ComunicacionService) {}
  @Input()
  carta: Carta | null= null;
  cantidad = 0;

  ngOnInit(): void {
    console.log(document.cookie);
    this.carta = this.comunicacionService.cartaSeleccionada?? JSON.parse(localStorage.getItem('cartaSeleccionada') || 'null');
  }
  aumentar() {
    this.cantidad++;
  }

  disminuir() {
    if (this.cantidad > 0) this.cantidad--;
  }
}