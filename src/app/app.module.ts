import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { HomeComponent } from './home/home.component';
import { DisciplinaComponent } from './disciplina/disciplina.component';
import { NotasComponent } from './notas/notas.component';
import { HorarioComponent } from './horario/horario.component';

import { ManutencaoService } from '../manutencao.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    DisciplinaComponent,
    NotasComponent,
    HorarioComponent
  ],
  bootstrap: [AppComponent],

  providers: [ManutencaoService]
})
export class AppModule {}
