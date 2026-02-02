import { Component } from '@angular/core';
import { IProduct } from '../interfaces/i-product';
import { CurrencyPipe, DatePipe, NgClass, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductFilterPipe } from '../pipes/product-filter-pipe';

@Component({
  selector: 'product-list',
  imports: [NgClass, FormsModule, UpperCasePipe, CurrencyPipe, DatePipe, ProductFilterPipe],
  templateUrl: './product-list.html',
  // styles: [
  //   `
  //     td {
  //       vertical-align: middle;
  //     }
  //   `,
  //   `
  //     td:first-child img {
  //       height: 40px;
  //     }
  //   `,
  // ],

  styleUrl: './product-list.css',
})
export class ProductList {
  filterSearch: string = ''; // Podríamos poner un valor por defecto
  title = 'Mi lista de productos';
  showImage = true;
  ngOnInit() {
    console.log('ProductList has been initialized!');
  }
  constructor() {
    console.log('ProductList has been created');
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }

  headers = { image: 'Imagen', desc: 'Producto', price: 'Precio', avail: 'Disponible' };
  products: IProduct[] = [
    {
      id: 1,
      desc: 'SSD hard drive',
      avail: new Date('2016-10-03'),
      price: 75,
      imageUrl: 'ssd.jpg',
      rating: 5,
    },
    {
      id: 2,
      desc: 'LGA1151 Motherboard',
      avail: new Date('2016-09-15'),
      price: 96.95,
      imageUrl: 'motherboard.jpg',
      rating: 4,
    },
  ];
}
