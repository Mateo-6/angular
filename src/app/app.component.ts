import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'my-first-project';
  name: string = '';
  page: number = 1;

  num1: number;
  num2: number;
  num3: number;
  result: string = '';

  data: any = [];

  constructor() {
    this.num1 = this.handleRandom();
    this.num2 = this.handleRandom();
    this.num3 = this.handleRandom();

    this.callApi();
  }

  async callApi() {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${this.page}`
    );
    this.data = await response.json();

    console.log(this.data);
  }

  handleRandom() {
    return Math.trunc(Math.random() * 6) + 1;
  }

  tirar() {
    this.num1 = this.handleRandom();
    this.num2 = this.handleRandom();
    this.num3 = this.handleRandom();

    if (this.num1 == this.num2 && this.num1 == this.num3) this.result = 'Ganó';
    else this.result = 'Perdió';
  }

  setName(name: string) {
    this.name = name;
  }

  next() {
    this.page += 1;
    this.callApi();
  }

  previous() {
    this.page -= 1;
    this.callApi();
  }
}
