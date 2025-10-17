import { Component, Input } from '@angular/core';
import { Carta } from '../models/carta.model';
import { ComunicacionService } from '../services/comunicacion.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  imports: [RouterLink],
})
export class CardComponent {
  constructor(private comunicacionService: ComunicacionService, private router: Router) {}
  @Input() data!: Carta;

  irADetalles(carta: Carta) {
    this.comunicacionService.cambiarCartaSeleccionada(carta);
    
  }
}