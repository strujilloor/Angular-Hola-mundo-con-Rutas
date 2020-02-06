import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  mostrar = false;

  person = {
    nombre: 'Stiven',
    apellido: 'Trujillo'
  };

  constructor() { }

  ngOnInit() {
  }

  miFuncion = () => {
    this.mostrar = !this.mostrar;
  }

}
