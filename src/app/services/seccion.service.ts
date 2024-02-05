import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Seccion } from '../models/Seccion';

@Injectable({
  providedIn: 'root'
})

export class SeccionService {

  private seccion: Seccion;
  private seccion$: Subject<Seccion> = new Subject<Seccion>();

  private secciones : Array<Seccion> =[
    {
      id: 0,
      codigo: "SEL",
      nombre: "---",
      ruta: "",
      desc: ""
    },
    {
      id: 1,
      codigo: "ROL",
      nombre: "Rol",
      ruta: "rol",
      desc: "¿Te quieres adentrar en los secretos de una partida de rol? Aquí encontrarás toda la información."
    },
    {
      id: 2,
      codigo: "MAG",
      nombre: "Escuela de Magia",
      ruta: "escuela_magia",
      desc: "¿Has recibido una carta especial de Hogwarts? Pasa y descubre sus secretos."
    }
  ]

  constructor() {
    this.setSeccion(this.secciones[0]);
  }

  //seccion
  public setSeccion(nuevaSeccion: Seccion){
    if(this.seccion == undefined || this.seccion == null){
      this.seccion = this.secciones[0];
    }else if (nuevaSeccion.id!= this.seccion.id){
      this.seccion = nuevaSeccion;
      this.seccion$.next(this.seccion);
    }
  }

  public setSeccionPerId(nuevaSeccionId: any){    
    let seccion_id = parseInt(nuevaSeccionId);    
    let seccionTemp = this.secciones.find((seccion) => seccion.id == seccion_id);
    if(seccionTemp!= undefined && seccionTemp!= null){
      this.setSeccion(seccionTemp);
    }
  }

  public getSeccion$(){
    return this.seccion$.asObservable();
  }

  public buscarSeccion(seccionAencontrar: Seccion){
    let seccion_id = seccionAencontrar.id;
    let seccionTemp = this.secciones.find((seccion) => seccion.id == seccion_id);
    return seccionTemp;
  }

  public buscarSeccionPorId(seccionAencontrarId){
    let seccion_id = parseInt(seccionAencontrarId);
    let seccionTemp = this.secciones.find((seccion) => seccion.id == seccion_id);
    return seccionTemp;
  }

  //secciones
  public getSecciones(){
    return this.secciones;
  }
}
