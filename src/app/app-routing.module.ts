import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './Componentes/home/home.component';
import {HeroesComponent} from './Componentes/heroes/heroes.component';
import {AboutComponent} from './Componentes/about/about.component';
import { HeroeComponent } from './Componentes/heroe/heroe.component';
import { BuscadorHeroesComponent } from './Componentes/buscador-heroes/buscador-heroes.component';


const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'heroe/:id', component: HeroeComponent },
  {path:"buscar/:parametro",component:BuscadorHeroesComponent},
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  
 }


