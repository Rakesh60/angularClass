import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  name = ''
  task=[]
  myname=''
  constructor(private hData:DataService){
  }

  enterName(n: any) {

    this.name = n.value;
    n.value=''
    console.log(n.value)
  }
  updateTask(e:any){
   this.task=e
  
  }

}
