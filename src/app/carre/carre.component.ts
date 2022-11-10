import { Component, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-carre',
  templateUrl: './carre.component.html',
  styleUrls: ['./carre.component.scss']
})
export class CarreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  @Output() newColorEvent2: EventEmitter<string> = new EventEmitter<string>();  
  
  public changeColor(color :string){
    this.newColorEvent2.emit(color);
  }

}
