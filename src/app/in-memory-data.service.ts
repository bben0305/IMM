import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { IMM } from './IMM';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const IMMs = [
      { Serial: 241176, Maker: 'ARBURG', Grade: '630H', Machine_type: 'Electric', Screw_Diameter:40, Injection_Pressure:200, 
        Screw_Stroke:160, Injection_Rate:512, Clamping_Force:2500, Shot_Weight:184},
      { Serial: 242795, Maker: 'ENGEL', Grade: 'E-MAC 180', Machine_type: 'Electric', Screw_Diameter:40, Injection_Pressure:200, 
        Screw_Stroke:175, Injection_Rate:200, Clamping_Force:1800, Injection_Weight:999},
    ];
    return {IMMs};
  }

  // // Overrides the genId method to ensure that a hero always has an id.
  // // If the heroes array is empty,
  // // the method below returns the initial number (11).
  // // if the heroes array is not empty, the method below returns the highest
  // // hero id + 1.
  // genId(heroes: IMM[]): number {
  //   return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  // }
}