import { Injectable } from '@angular/core';

@Injectable()
export class RandomNumberService {

  constructor() {}

  between(min: number, max: number): number {
    console.log(min, max);
    return Math.floor(Math.random() * (max + 1 - min)) + min;
  }
}
