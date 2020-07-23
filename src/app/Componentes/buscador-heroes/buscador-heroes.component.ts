import { Component, OnInit, OnChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HeroeService } from 'src/app/Servicios/Heroes/heroe.service';
import { HeroeDto } from 'src/app/Interfaces/IHeroes';

@Component({
  selector: 'app-buscador-heroes',
  templateUrl: './buscador-heroes.component.html',
  styleUrls: ['./buscador-heroes.component.css']
})
export class BuscadorHeroesComponent implements OnInit{

  busqueda : string ;
  heroes :HeroeDto[];
  
  constructor(private route: ActivatedRoute, private heroeService: HeroeService) { 

    console.log("entro consutructor");
  }

  ngOnInit(): void 
  {
    this.route.params   
    .subscribe(params => {      
      this.busqueda = params["parametro"];
    });   
       
    this.BuscarHeroes(this.busqueda);
  }
  
 

  BuscarHeroes(parametro:string)
  {
    console.log("entro busqueda");
    
      if(parametro)
      {
          this.heroes=this.heroeService.BusquedaHeroes(parametro);
      }
  }

}
