import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {

  value: BehaviorSubject<number> = new BehaviorSubject<number>(0)
  constructor() { }

  toKelvin(){
    return this.value.pipe(
      map(v => this.round(v + 273.15))
    )
  }

  toFahrenheit(){
    return this.value.pipe(
      map(v => this.round(v * 9 / 5 + 32))
    )
  }

  nextFahrenheit(fValue: number){
    this.value.next(this.round((fValue - 32) * 5 / 9))
  }

  nextKelvin(kValue: number){
    this.value.next(this.round(kValue-273.15))
  }

  round(value: number){
    return Math.round(value * 100) / 100
  }
}
