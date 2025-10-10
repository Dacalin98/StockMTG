import { Routes } from '@angular/router';
import { CartaDescripcionComponent } from './carta-descripcion/carta-descripcion.component';
import { InicioComponent } from './inicio/inicio.component';


export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'detalles', component: CartaDescripcionComponent },
];
