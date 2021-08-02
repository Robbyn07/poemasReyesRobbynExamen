import { Component, OnInit } from '@angular/core';
import { User } from '../../domain/user';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.page.html',
  styleUrls: ['./register-user.page.scss'],
})
export class RegisterUserPage implements OnInit {

  usuario: User = new User();

  contactos: any;

  constructor(private route: ActivatedRoute, private router: Router,
    private userService: UsersService) { 
      
    route.queryParams.subscribe(params =>{
      console.log(params)
      this.usuario = new User();
      if(this.router.getCurrentNavigation().extras.queryParams){
        this.usuario = this.router.getCurrentNavigation().extras.queryParams.usuario
      }
    })
  }

  ngOnInit() {
  }

  guardarTotal(){
    console.log(this.usuario);
    this.userService.save(this.usuario);
    this.router.navigate(['login']);
  }
}