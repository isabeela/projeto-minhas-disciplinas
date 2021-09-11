import { Injectable } from '@angular/core';

interface Subjects {
  id: number;
  name: String;
}

interface diaSemana {
  ids: number;
  diaSemana: number;
}

@Injectable()
export class ManutencaoService {
  private list: Subjects[] = [];
  private lista: diaSemana[] = [];
  constructor() {}

  getList() {
    return this.list;
  }

  getDia() {
    return this.lista;
  }

  add(inputValue: string) {
    this.getList().push({
      id: new Date().getTime(),
      name: inputValue
    });
  }

  remove(id: number) {
    this.getList().splice(
      this.getList().indexOf(this.getList().find(e => e.id === id)),
      1
    );
  }

  adds(inputValue: number) {
    this.getDia().push({
      ids: new Date().getTime(),
      diaSemana: inputValue
    });
  }
}
