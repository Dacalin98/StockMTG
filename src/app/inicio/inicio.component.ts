import { Component } from '@angular/core';
import { BuscadorComponent } from "../buscador/buscador.component";
import { CardGridComponent } from "../card-grid/card-grid.component";

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [BuscadorComponent, CardGridComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
