import { Component, OnInit } from '@angular/core';
import { Seccion } from 'src/app/models/Seccion';
import { SeccionService } from 'src/app/services/seccion.service';

@Component({
  selector: 'app-selector-inicio',
  templateUrl: './selector-inicio.component.html',
  styleUrls: ['./selector-inicio.component.scss']
})
export class SelectorInicioComponent implements OnInit {

  public secciones: Array<Seccion> = [];
  public seccionSeleccionada: Seccion;
  public seccionSeleccionadaId: number;

  constructor(
    private seccionService: SeccionService
  ) {
    this.secciones = this.seccionService.getSecciones();
    this.seccionSeleccionada = this.secciones[0]
    this.seccionSeleccionadaId = this.seccionSeleccionada.id;
  }

  ngOnInit(): void {
  }

  public buscarSeccion(nuevaSeccionId: number){
    this.seccionSeleccionada = this.seccionService.buscarSeccionPorId(nuevaSeccionId);
    this.seccionSeleccionadaId = this.seccionSeleccionada.id;
  }

  public irA(seccionId: number){
    this.seccionService.setSeccionPerId(seccionId);
  }

  

}
