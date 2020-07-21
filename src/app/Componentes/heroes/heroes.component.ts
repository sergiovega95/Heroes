import { Component, OnInit } from '@angular/core';
import { HeroeDto } from '../../Interfaces/IHeroes';
import {HeroeService} from '../../Servicios/Heroes/heroe.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes :HeroeDto[];
  
  constructor(private heroeService: HeroeService, private router: Router) 
  {
    this.heroes=this.heroeService.GetHeroes();   
  }

  ngOnInit(): void {

   
  }

  BuscarHeroes(busqueda :string){

   let allHeroes = this.heroeService.GetHeroes();
   this.heroes=this.heroes.filter(heroe => heroe.nombre.includes(busqueda));
   
  }

  VerHeroe(indice:string)
  {
    this.router.navigate(['/heroe', indice])
  }

}
