import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConnectService } from '../../service/connect.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit {
data: any;

  constructor(private activatedRoute:ActivatedRoute ,public connectService:ConnectService){}
  Products: any;
  ngOnInit():void{
    this.fetchProduct()

  }
  
  fetchProduct() {
    this.activatedRoute.params.subscribe(
      (data) => {
        console.log('data', data['id'])

        this.connectService.getProductBySubCategory(data['id'])
          .subscribe(
            products => {
              console.log('products', products)
              this.Products=products
  

  
            }
          )
      }
    )
  }
}

  