import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularClass';
  color1='red';
  color2='yellow';
  show=true;
  title2='Iphone se 2020';
  price=4500;
  
  constructor(private cData:DataService){
  }
  updateColour(){
    this.color1='white';
    this.color2='teal';

  }
}
