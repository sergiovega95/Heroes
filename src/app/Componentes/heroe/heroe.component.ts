import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {HeroeDto} from '../../Interfaces/IHeroes';
import {HeroeService} from '../../Servicios/Heroes/heroe.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
 
   heroe:HeroeDto

  constructor(
    private route: ActivatedRoute,
    private heroeService: HeroeService,
  ) {}

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      console.log(params);
      let IdHeroe:number= params['id'];    
       this.heroe = this.heroeService.GetHeroeById(IdHeroe) ;     
      console.log(this.heroe);
    });
  }

}
