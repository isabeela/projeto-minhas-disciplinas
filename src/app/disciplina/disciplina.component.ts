import { Component, OnInit } from '@angular/core';
import { ManutencaoService } from '../../manutencao.service';

@Component({
  selector: 'app-disciplina',
  templateUrl: './disciplina.component.html',
  styleUrls: ['./disciplina.component.css']
})
export class DisciplinaComponent implements OnInit {
  inputValue: '';

  constructor(public manutencaoService: ManutencaoService) {
    manutencaoService.add('Desenvolvimento para Servidores II');
    manutencaoService.add('Desenvolvimento para dispositivos móveis I');
  }

  handleClick() {
    this.manutencaoService.add(this.inputValue);
    this.inputValue = '';
  }

  ngOnInit() {}
}
