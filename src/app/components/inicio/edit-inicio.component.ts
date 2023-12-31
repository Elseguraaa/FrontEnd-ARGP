import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { ImagenService } from 'src/app/service/imagen.service';

@Component({
  selector: 'app-edit-inicio',
  templateUrl: './edit-inicio.component.html',
  styleUrls: ['./edit-inicio.component.css']
})


export class EditInicioComponent {


  persona: persona =null;
  constructor(private personaServicio: PersonaService,
    private activatedRouter : ActivatedRoute,
    private router: Router,
    public imagenservice:ImagenService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaServicio.detail(id).subscribe(
      data =>{
        this.persona = data;
      }, err =>{
         alert("Error al modificar");
         this.router.navigate(['']);
      }
    )
  }

  onUpdate():void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.persona.img = this.imagenservice.url
    this.personaServicio.update(id, this.persona).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la persona");
        this.router.navigate(['']);
      }
    )
  }

  uploadImage($event:any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name ="perfil_" + id;
    this.imagenservice.uploadImage($event,name)
  }

}