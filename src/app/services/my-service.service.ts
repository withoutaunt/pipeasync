import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() { }

  retornar(){
    return[
      {
        nombre: 'Cinthia',
        apellido: 'Albini'
      },
      {
        nombre: 'Camila',
        apellido: 'Gomez'   

      }
    ]
  }
}
