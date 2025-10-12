import { Component, Input } from '@angular/core';
import { Carta } from '../models/carta.model';
import { ComunicacionService } from '../services/comunicacion.service';
import { NgClass } from "@angular/common";
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ConexionJSONService } from '../services/conexion-json/conexion-json.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-carta-descripcion',
  imports: [NgClass, FormsModule],
  templateUrl: './carta-descripcion.component.html',
  styleUrl: './carta-descripcion.component.css',
})
export class CartaDescripcionComponent {
  constructor(
    private comunicacionService: ComunicacionService,
    private sanitizer: DomSanitizer,
    private conexionJSONService: ConexionJSONService
  ) {}

  actualizar() {
    this.carta!.cantidad = this.cantidad;
    this.conexionJSONService.actualizarOAnadir(this.carta!).subscribe();
  }

  @Input()
  carta: Carta | null = null;
  cantidad = 0;
  texto: string = '';
  textoHTML: SafeHtml | undefined;

  ngOnInit(): void {
    console.log(document.cookie);
    this.carta =
      this.comunicacionService.cartaSeleccionada ??
      JSON.parse(localStorage.getItem('cartaSeleccionada') || 'null');
    this.procesarTexto();
    this.textoHTML = this.sanitizer.bypassSecurityTrustHtml(this.texto);
  }
  aumentar() {
    this.cantidad++;
  }

  disminuir() {
    if (this.cantidad > 0) this.cantidad--;
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
}
