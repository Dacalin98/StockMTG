import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgIf } from '@angular/common';
import { MatCommonModule } from '@angular/material/core';
import { Carta } from '../models/carta.model';
import { BuscarCartasService } from '../services/carta-service/carta-service';

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
  ],
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css'],
})
export class BuscadorComponent implements OnInit {
  constructor(private buscarCartasService: BuscarCartasService) {}

  buscadorControl = new FormControl('');
  opcionesBusqueda: Carta[] = [];

  ngOnInit() {}

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
}
