import { Component, ViewChild } from '@angular/core';
import { DieComponent } from './die/die.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Variable die';
  version = "4.0";
  total = 0;
  throws = 0;

  // Inject die as viewchild so you may access its properties and methods
  @ViewChild(DieComponent)
  die: DieComponent;

  roll() {
  	this.die.roll();
  	this.total += this.die.value;
  	this.throws++;
  }

  setMaxEyes(n: number) {
  	// Still need to convert string to number
  	this.die.maxValue = +n;
  }
}
