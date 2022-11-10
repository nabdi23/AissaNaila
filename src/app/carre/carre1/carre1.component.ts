import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-carre1',
  templateUrl: './carre1.component.html',
  styleUrls: ['./carre1.component.scss']
})
export class Carre1Component implements OnInit {

  constructor() { }
 
  @Output() newColorEvent: EventEmitter<string> = new EventEmitter<string>();
  ngOnInit(): void {
  }

  

}
