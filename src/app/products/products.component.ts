import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
productName=''
constructor(private route:ActivatedRoute){
  this.route.params.subscribe((data)=>{
    this.productName=data['fruits'];
    console.log(data)
  })
  
}

}
