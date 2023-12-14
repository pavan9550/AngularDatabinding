import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  // name: string = 'Iphone 13';
  // price: number = 999;
  // color: string = 'Black';
  // discountedPrice: number = 777;

  product = {
    name: 'Iphone x',
    price: 789,
    color: 'Black',
    discount : 8.5,
    inStock:2,
    image:"/assets/images/NAGESHPAVANPHOTO.jpg"
  };

  getDiscountedPrice():number{
    return (this.product.price - (this.product.discount/100) * this.product.price)
  }
}
