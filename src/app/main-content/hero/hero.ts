import { Component } from '@angular/core';
import { HeroCurve } from './hero-curve/hero-curve';

@Component({
  selector: 'app-hero',
  imports: [HeroCurve],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {

}
