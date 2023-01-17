/*
  File: app.component.ts
  Author: Korcsmaros Kende Andras
  Copyright: 2023, Korcsmaros Kende Andras
  Group: Szoft II/N
  Date: 2023.01.17
  Github: https://github.com/KendeAndras/
  Licenc: GNU GPL
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'latogatni';
  
  towns = [
    {name:"Székesfehérvár", country:"Fejér", area:170.89, population: 95545},
    {name:"Szombathely", country:"Vas", area:97.5, population: 78324},
    {name:"Sopron", country:"Győr-Moson-Sopron", area:169.04, population: 62900},
    {name:"Zalaegerszeg", country:"Zala", area:102.42, population: 55470},
    {name:"Sárvár", country:"Vas", area:64.65, population: 15072},
    {name:"Lenti", country:"Zala", area:73.79, population: 7348},
    {name:"Zalakaros", country:"Zala", area:17.17, population: 1936}
  ]

  constructor() {}

}
