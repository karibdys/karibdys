import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectorInicioComponent } from './shared/selector-inicio/selector-inicio.component';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  { path: '', component: SelectorInicioComponent },
  { path: 'escuela_magia', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
