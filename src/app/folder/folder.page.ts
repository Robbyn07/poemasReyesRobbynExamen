import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PoemsService } from '../services/poems.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  poemas: any;

  constructor(private activatedRoute: ActivatedRoute, private router:Router, private poemasService: PoemsService) { }
  
  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.poemas = this.poemasService.getPoemas();
  }

  navCrear(){
    this.router.navigate(['contactos/crearrest'])
  }

}
