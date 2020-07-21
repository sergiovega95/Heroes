//Modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

//Servicios
import {HeroeService} from '../app/Servicios/Heroes/heroe.service';

//Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './Componentes/home/home.component';
import { NavbarComponent } from './Componentes/Shared/navbar/navbar.component';
import { FooterComponent } from './Componentes/Shared/footer/footer.component';
import { HeroesComponent } from './Componentes/heroes/heroes.component';
import { AboutComponent } from './Componentes/about/about.component';
import { HeroeComponent } from './Componentes/heroe/heroe.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    HeroesComponent,
    AboutComponent,
    HeroeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
