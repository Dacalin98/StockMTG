import { Component } from '@angular/core';
import { BuscadorComponent } from "../buscador/buscador.component";
import { CardGridComponent } from "../card-grid/card-grid.component";
import { CartaDescripcionComponent } from "../carta-descripcion/carta-descripcion.component";

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CardGridComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
