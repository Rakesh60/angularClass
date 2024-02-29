import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FooterServiceService {

  constructor() { }
  get_footerData(){
    return[
      {name:'Sunny',email:'sunny@gmail.com',phone:9635895475},
      {name:'Devil',email:'devilkumar@gmail.com',phone:7895895475},
      {name:'Surajit',email:'surajit@gmail.com',phone:9395895475},
      {name:'Subham ',email:'subham@gmail.com',phone:9635895475},
    ]
  }
}
