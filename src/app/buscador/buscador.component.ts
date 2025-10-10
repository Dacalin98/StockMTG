import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { AsyncPipe, NgIf } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Carta } from '../models/carta.model';
import { BuscarCartasService } from '../services/carta-service/carta-service';
import { Router, RouterLink } from '@angular/router';
import { MatCommonModule } from '@angular/material/core';
import { ComunicacionService } from '../services/comunicacion.service';
import { routes } from '../app.routes';

@Component({
  selector: 'app-buscador',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    AsyncPipe,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    NgIf,
    MatCommonModule,
    RouterLink,
  ],
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css'],
})
export class BuscadorComponent implements OnInit {
  constructor(private comunicacionService: ComunicacionService, private buscarCartasService: BuscarCartasService,private router:Router) {}

  cartaSeleccionada: Carta | null = null;
  buscadorControl = new FormControl('');
  opcionesBusqueda: Carta[] = [];
  ngOnInit() {}

  seleccionarCarta(carta: Carta) {
    this.cartaSeleccionada = carta;
    this.comunicacionService.cambiarCartaSeleccionada(carta);
    if (this.router.url.includes("/detalles")){
      window.location.reload();      
    }
  }

  actualizarListaCartas(texto: string | null) {
    if (texto === null || texto.length < 3) {
      this.opcionesBusqueda = [];
      return;
    }
    this.buscarCartasService
      .buscarCartasPorNombre(texto)
      .subscribe((cartas: Carta[]) => {
        this.opcionesBusqueda = cartas;
      });
  }
  getSrc(carta: Carta): (string | undefined)[] {
    return [
      carta?.image_uris?.art_crop,
      carta?.card_faces?.[0]?.image_uris?.art_crop,
      carta?.image_uris?.small,
      carta?.image_uris?.normal,
      carta?.card_faces?.[0]?.image_uris?.small,
      carta?.card_faces?.[0]?.image_uris?.normal,
    ].filter(Boolean);
  }
}
