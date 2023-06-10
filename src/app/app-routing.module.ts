import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewSkillComponent } from './components/hys/new-skill.component';
import { EditSkillComponent } from './components/hys/edit-skill.component';
import { EditInicioComponent } from './components/inicio/edit-inicio.component';
import { NuevaExperienciaComponent } from './components/experiencia/nueva-experiencia.component';
import { EditarExperienciaComponent } from './components/experiencia/editar-experiencia.component';


const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'login',component: LoginComponent},
  {path: 'nuevaedu',component: NeweducacionComponent},
  {path: 'editedu/:id',component: EditeducacionComponent},
  {path: 'newskill',component: NewSkillComponent},
  {path: 'editskill/:id',component: EditSkillComponent},
  {path: 'editinicio/:id',component: EditInicioComponent},
  {path: 'nuevaexp',component: NuevaExperienciaComponent},
  {path: 'editexp/:id',component: EditarExperienciaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
