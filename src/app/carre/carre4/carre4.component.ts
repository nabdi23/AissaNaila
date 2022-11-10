import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-carre4',
  templateUrl: './carre4.component.html',
  styleUrls: ['./carre4.component.scss']
})
export class Carre4Component implements OnInit {

  constructor() { }

  @Output() newColorEvent: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  }
  

}
