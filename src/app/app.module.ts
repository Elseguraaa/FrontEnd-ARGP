import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { FotoMiaComponent } from './components/foto-mia/foto-mia.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { asapScheduler } from 'rxjs';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from 
    '@angular/platform-browser/animations';
import { interceptorProvider } from './service/interceptor-service';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { HysComponent } from './components/hys/hys.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { EditSkillComponent } from './components/hys/edit-skill.component';
import { NewSkillComponent } from './components/hys/new-skill.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { EditInicioComponent } from './components/inicio/edit-inicio.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { NuevaExperienciaComponent } from './components/experiencia/nueva-experiencia.component';
import { EditarExperienciaComponent } from './components/experiencia/editar-experiencia.component';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    FotoMiaComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    ProyectosComponent,
    EducacionComponent,
    HysComponent,
    ContactoComponent,
    EditSkillComponent,
    NewSkillComponent,
    EditInicioComponent,
    ExperienciaComponent,
    NuevaExperienciaComponent,
    EditarExperienciaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NgCircleProgressModule.forRoot({}),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
