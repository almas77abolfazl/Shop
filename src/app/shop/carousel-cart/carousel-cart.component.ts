import { Component, Input, OnInit } from '@angular/core';
import { Stuff } from 'src/app/panel';

@Component({
  selector: 'app-carousel-cart',
  templateUrl: './carousel-cart.component.html',
  styleUrls: ['./carousel-cart.component.scss'],
})
export class CarouselCartComponent implements OnInit {
  @Input() numberOfElements = 3;
  @Input() numberOfScroll = 1;
  @Input() circular = true;
  @Input() autoplayInterval = 0;
  @Input() headerTitle = '';

  @Input() products: Stuff[] = [
    {
      category: '1',
      stuffName: 'موبایل',
      code: '1',
      price: 5000,
      quantity: 15,
      rating: 3,
      inventoryStatus: 'موجود',
    },
    {
      category: '2',
      stuffName: 'لپ تاپ',
      code: '2',
      price: 3000,
      quantity: 10,
      rating: 2,
      inventoryStatus: 'ناموجود',
    },
    {
      category: '3',
      stuffName: 'پاور بانک',
      code: '3',
      price: 500,
      quantity: 300,
      rating: 4,
      inventoryStatus: 'موجود',
    },
    {
      category: '4',
      stuffName: 'hello4',
      code: '4',
      price: 4444,
      quantity: 4444,
      rating: 4444,
      inventoryStatus: 'hello4',
    },
    {
      category: '5',
      stuffName: 'hello5',
      code: '5',
      price: 5555,
      quantity: 5555,
      rating: 5555,
      inventoryStatus: 'hello5',
    },
    {
      category: '6',
      stuffName: 'hello6',
      code: '6',
      price: 6666,
      quantity: 6666,
      rating: 6666,
      inventoryStatus: 'hello6',
    },
  ];

  responsiveOptions: any;

  constructor() {}

  ngOnInit() {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }
}
