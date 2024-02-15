import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  name = ''
  task=[]

  enterName(n: any) {

    this.name = n.value;
    n.value=''
    console.log(n.value)
  }
  updateTask(e:any){
   this.task=e
  
  }

}
