import { Component, OnInit } from '@angular/core';
import { Poem } from '../../domain/poem';
import { ActivatedRoute, Router } from '@angular/router';
import { PoemsService } from '../../services/poems.service';

@Component({
  selector: 'app-create-poems',
  templateUrl: './create-poems.page.html',
  styleUrls: ['./create-poems.page.scss'],
})
export class CreatePoemsPage implements OnInit {

  poema: Poem = new Poem();
  imgData: any;

  contactos: any;

  constructor(private route: ActivatedRoute, private router: Router,
    private poemaService: PoemsService) { 
      
    route.queryParams.subscribe(params =>{
      console.log(params)
      this.poema = new Poem();
      if(this.router.getCurrentNavigation().extras.queryParams){
        this.poema = this.router.getCurrentNavigation().extras.queryParams.poema
      }
    })
  }

  ngOnInit() {
  }

  guardarPoema(){
    console.log(this.poema);
    this.poemaService.save(this.poema);
    this.router.navigate(['perfil']);
  }
}