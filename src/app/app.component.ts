import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})



export class AppComponent {
  title = 'my-first-project';
  public color : string = "";

  public changeColor(color :string){
   this.color = color;
  }
  
}
