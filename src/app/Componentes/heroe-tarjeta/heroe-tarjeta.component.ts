import { Component, OnInit, Input } from '@angular/core';
import { HeroeDto } from '../../Interfaces/IHeroes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe:HeroeDto;  
  constructor(private router: Router) { 
   
  }

  ngOnInit(): void {
    
  }
   
  VerHeroe(Id:number)
  {    
    this.router.navigate(['/heroe', Id])
  }
}
