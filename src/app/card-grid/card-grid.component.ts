import { Component } from '@angular/core';
import { FiltrosComponent } from "../filtros/filtros.component";
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-card-grid',
  standalone: true,
  imports: [FiltrosComponent, CardComponent],
  templateUrl: './card-grid.component.html',
  styleUrl: './card-grid.component.css'
})
export class CardGridComponent {

}
