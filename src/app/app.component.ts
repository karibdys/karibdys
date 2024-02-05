import { Component } from '@angular/core';
import { Seccion } from './models/Seccion';
import { Observable, filter } from 'rxjs';
import { SeccionService } from './services/seccion.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  private seccion: Seccion;
  private seccion$: Observable<Seccion>;

  constructor(
    private seccionService: SeccionService,
    private router: Router,
  ){
    this.seccion = this.seccionService.getSecciones()[0];
    this.irA(this.seccion);
    
    this.seccion$ = this.seccionService.getSeccion$();
    this.seccion$.subscribe(
      (seccionNueva: Seccion) =>{
          this.seccion = seccionNueva;
          this.irA(this.seccion);
      }
    )

    let routerEvents = this.router.events.pipe(filter(
        event => event instanceof NavigationEnd)
      );
    routerEvents.subscribe(
      (ruta: NavigationEnd) =>{
        let url = ruta.urlAfterRedirects;
        console.log(url)
        if(url == "/"){
          this.seccionService.setSeccionPerId(0);
        }
    })
    
  }

  public irA(seccion: Seccion){
    if (seccion.codigo == "ROL"){
      console.log("mejor no vayamos")
    }else{
      this.router.navigate([seccion.ruta]);
    }
    
  }
}
