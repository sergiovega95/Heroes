import { Component, OnInit } from '@angular/core';
import { HeroeDto } from 'src/app/Interfaces/IHeroes';
import { HeroeService } from 'src/app/Servicios/Heroes/heroe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  busqueda:string;
  heroes :HeroeDto[];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  BusquedaHeroes(parametro:string)
  {   
      
    this.router.navigate(['/buscar',parametro]); 
    
  }
}
