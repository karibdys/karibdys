import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { SelectorInicioComponent } from './selector-inicio/selector-inicio.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MenuLateralComponent,
    MenuPrincipalComponent,
    SelectorInicioComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    FormsModule,
    SelectorInicioComponent
  ]
})
export class SharedModule { }
