import { Component, Input, OnInit } from '@angular/core';

import { RandomNumberService } from '../random-number.service';

@Component({
  selector: 'app-die',
  templateUrl: './die.component.html',
  styleUrls: ['./die.component.css']
})
export class DieComponent implements OnInit {
  value: number;
  visible = false;
  @Input() maxValue: number;

  constructor(public randomNumber: RandomNumberService) {}

  roll() {
    // Show that the die is being cast, by making it invisible for a short while.
    // This is important, since the new value may be the same as the old and the
    // app would look broken.
    this.visible = false;
    this.value = this.randomNumber.between(1, this.maxValue);
    setTimeout(() => {this.visible = true; }, 200);
  }

  ngOnInit() {
    this.roll();
  }
}
