import { Component } from '@angular/core';
import { DataService } from './data.service';
import { NgForm } from '@angular/forms';
import { FooterServiceService } from './footer-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Learning Angular Services';
  color1='red';
  color2='yellow';
  show=true;
  title2='Iphone se 2020';
  price=4500;
  data_users:any;
  constructor(private cData:DataService,fdata:FooterServiceService){
    this.data_users=fdata.get_footerData();
  }
  updateColour(){
    this.color1='white';
    this.color2='teal';

  }

  userdata:any={};
  form_data(data:NgForm){
    this.userdata=data;
    
   
  }


  studentData:any=[
    {name:'Rakesh',email:'rakeshgupta@gmail.com',phone:9635895475},
    {name:'RajKumar',email:'rajkumar@gmail.com',phone:7895895475},
  ]

  
}
