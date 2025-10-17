import { Component } from '@angular/core';
import { FiltrosComponent } from "../filtros/filtros.component";
import { CardComponent } from "../card/card.component";
import { Carta } from '../models/carta.model';
import { BuscarCartasService } from '../services/carta-service/carta-service';
import { ConexionJSONService } from '../services/conexion-json/conexion-json.service';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-card-grid',
  imports: [FiltrosComponent, CardComponent, FormsModule, NgFor],
  templateUrl: './card-grid.component.html',
  styleUrl: './card-grid.component.css',
})
export class CardGridComponent {
  constructor(private JsonService: ConexionJSONService) {}

  cartas: Carta[] = [];
  cartasFiltradas: Carta[] = [];

  ngOnInit(): void {
    this.JsonService.obtenerTodas().subscribe((data:{cartas:Carta[]}) => {
      this.cartas = data.cartas;
      this.actualizarCartasFiltradas(this.cartas);
    });
  }

  actualizarCartasFiltradas(cartas: Carta[]) {
    this.cartasFiltradas = cartas;
  }


}
