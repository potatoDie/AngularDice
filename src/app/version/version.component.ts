import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-version',
  template: `
     version {{ versionnr }}
  `,
  styles: [
    `:host {
      background: rgb(86, 61, 124);
      color: white;
      padding: 1em;
    }`
  ]
})
export class VersionComponent implements OnInit {
  @Input()
  versionnr: string;

  constructor() { }

  ngOnInit() {
  }

}
