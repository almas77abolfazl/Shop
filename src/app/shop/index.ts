import { Provider } from '@angular/core';
import { CardComponent } from './card/card.component';
import { CarouselCartComponent } from './carousel-cart/carousel-cart.component';
import { ShopLayoutComponent } from './shop-layout/shop-layout.component';

export const COMPONENTS: Provider[] = [
  ShopLayoutComponent,
  CarouselCartComponent,
  CardComponent,
];
