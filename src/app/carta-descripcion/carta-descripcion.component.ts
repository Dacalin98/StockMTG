import { Component, Input } from '@angular/core';
import { Carta } from '../models/carta.model';
import { ComunicacionService } from '../services/comunicacion.service';
import { NgClass } from "@angular/common";
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ConexionJSONService } from '../services/conexion-json/conexion-json.service';
import { FormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-carta-descripcion',
  imports: [FormsModule, NgClass, NgIf],
  templateUrl: './carta-descripcion.component.html',
  styleUrl: './carta-descripcion.component.css',
})
export class CartaDescripcionComponent {
  constructor(
    private comunicacionService: ComunicacionService,
    private sanitizer: DomSanitizer,
    private conexionJSONService: ConexionJSONService
  ) {}

  cantidadOriginal = 0;

  actualizar() {
    this.carta!.cantidad = this.cantidad;
    this.conexionJSONService.actualizarOAnadir(this.carta!).subscribe();
  }

  @Input()
  carta: Carta | null = null;
  cantidad = 0;
  texto: string = '';
  textoHTML: SafeHtml | undefined;

  async ngOnInit(): Promise<void> {
    var id =
      this.comunicacionService.cartaSeleccionada?.id ??
      JSON.parse(localStorage.getItem('cartaSeleccionada') || 'null').id;
    const data = await firstValueFrom(
      this.conexionJSONService.obtenerCarta(id)
    );
    if (data.carta !== null) {
      this.carta = data.carta;
      this.cantidadOriginal = this.carta?.cantidad || 0;
    } else {
      this.carta = JSON.parse(
        localStorage.getItem('cartaSeleccionada') || 'null');
    }

    this.procesarTexto();
    this.textoHTML = this.sanitizer.bypassSecurityTrustHtml(this.texto);
    this.cantidad = this.carta?.cantidad || 0;
  }
  aumentar() {
    this.cantidad++;
    this.actualizar();
  }

  disminuir() {
    if (this.cantidad > 0) this.cantidad--;
    this.actualizar();
  }

  procesarTexto() {
    if (!this.carta?.oracle_text) return '';
    var img = "<img src='/imgs/";
    var expresion = /\{(.*?)\}/g;
    this.texto =
      '<p>' +
      this.carta.oracle_text.replaceAll(expresion, (i) => {
        return (
          img + i.substring(1, i.length - 1) + ".webp' style='height: 1em;'/>"
        );
      }) +
      '</p>';
    this.texto = this.texto.replaceAll('\n', '<br/>');
    return;
  }
  deshacer() {
    this.cantidad = this.cantidadOriginal;
    this.actualizar();
  }
}
