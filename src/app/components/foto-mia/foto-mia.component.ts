import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-foto-mia',
  templateUrl: './foto-mia.component.html',
  styleUrls: ['./foto-mia.component.css']
})
export class FotoMiaComponent implements OnInit {

  persona: persona = new persona("","","","")

  constructor(private router:Router,public personaService: PersonaService, private tokenService: TokenService) {}

  isLogged = false;

  ngOnInit(): void {
    this.cargarPersona();
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged = false;
    }
  }
  
  onLogOut():void {
    this.tokenService.logOut();
    window.location.reload();
  }

  login() {
    this.router.navigate(['/login'])
  }

  cargarPersona(){
    this.personaService.detail(1).subscribe(data =>
      {this.persona =data})
  }
  
}
