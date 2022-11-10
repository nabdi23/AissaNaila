import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-carre3',
  templateUrl: './carre3.component.html',
  styleUrls: ['./carre3.component.scss']
})
export class Carre3Component implements OnInit {

  constructor() { }

  @Output() newColorEvent: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  }
  

}
