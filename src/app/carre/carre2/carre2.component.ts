import { Component,EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-carre2',
  templateUrl: './carre2.component.html',
  styleUrls: ['./carre2.component.scss']
})
export class Carre2Component implements OnInit {

  constructor() { }
  public color : string = "carre2"
  @Output() newColorEvent: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  }

  
  

}
