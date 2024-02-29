import { Component } from '@angular/core';
import { FooterServiceService } from '../footer-service.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  data_users:any;
  constructor(private fdata:FooterServiceService){
    this.data_users=fdata.get_footerData();

  }
}
