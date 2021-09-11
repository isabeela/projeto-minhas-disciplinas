import { Injectable } from '@angular/core';

interface Manutencao {
  id: number;
  nome: String;
  p1: number;
  p2: number;
  diaSemana: number;
  horario: number;
}

@Injectable()
export class ManutencaoService {}
