import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = "Leandro";

  nombre2 = "ferney Leandro Romero ramirez";

  arr = [1,2,3,4,5,6,7,8,9,10];

  Pi = Math.PI;

  a = 0.234;

  moneda = 2455.65;

  heroe = {
    nombre:"Logan",
    clave: "Walverine",
    edad: 500,
    direccion: {
      carrera:"63",
      calle:"4b",
      casa:"16"
    }

  }

  valorPromesa = new Promise( (resolve, reject)=>{
    setTimeout(()=>resolve('LLego la data'), 3500);
  })

  hoy = new Date;

  video = 'qCZAynQU_-8';

  activar = true;

}
