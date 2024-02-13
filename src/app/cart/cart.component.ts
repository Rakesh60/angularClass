import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  componentName='To Do List';
  btnDisabled=true;
  item:any='';
  cart:any=[]
  date:any=''
  
 constructor(){
  setTimeout(()=>{
    this.btnDisabled=false;
  },1000)
 }

//  getItem(e:any){
//  console.log(e.target.value)
//  this.item=e.target.value
//  }
 addToCart(){
  if (this.item.length>0) {
    
    this.cart.push(this.item)
    this.date=new Date();
    this.item=''
  } else {
    alert('Enter value')
  }
 
 }



}
