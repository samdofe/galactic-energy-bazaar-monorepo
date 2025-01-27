import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FedsCdkRotatingImgComponent } from '@feds/cdk/rotating-img';

@Component({
  selector: 'trades-nx-welcome',
  imports: [CommonModule, FedsCdkRotatingImgComponent],
  template: `
    <div id="trades-welcome">
      <h1>
        <span> Hello there, </span>
        Welcome trades 👋
      </h1>
    </div>
    EARTH
    <feds-cdk-rotating-img
      [dayUrl]="'https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_base.webp'"
      [nightUrl]="'https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_second.webp'"
      [cloudsUrl]="'https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NOV07_third.webp'"
      [size]="'200px'"/>
    MERCURY
    <feds-cdk-rotating-img
      [dayUrl]="'https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/ULT01.webp'"
      [size]="'70px'"
      [shadowColor]="'#a2b0bd'" 
    />
    VENUS
    <feds-cdk-rotating-img
      [dayUrl]="'https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/ZAR02.webp'"
      [size]="'70px'"
      [shadowColor]="'#e6993b'"
    />
    V ATHMOSPHERE
    <feds-cdk-rotating-img
      [dayUrl]="'https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/DRA03.webp'"
      [size]="'70px'"
      [shadowColor]="'#d9bc8e'"
    />
    MARS
    <feds-cdk-rotating-img
      [dayUrl]="'https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/ECL04.webp'"
      [size]="'70px'"
      [shadowColor]="'#d97557'"
    />
    JUPITER
    <feds-cdk-rotating-img
      [dayUrl]="'https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/CRY05.webp'"
      [size]="'70px'"
      [shadowColor]="'#a2b0bd'"
    />
    SATURN
    <feds-cdk-rotating-img
      [dayUrl]="'https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/AET06.webp'"
      [size]="'70px'"
      [shadowColor]="'#e9dec9'"
    />
    ALPHA (SATURN RING)
    <feds-cdk-rotating-img
      [dayUrl]="'https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/JOV08.webp'"
      [size]="'70px'"
      [shadowColor]="'#625e5a'"
    />
    URANUS
    <feds-cdk-rotating-img
      [dayUrl]="'https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/HYP09.webp'"
      [size]="'70px'"
      [shadowColor]="'#97c5cf'"
    />
    NEPTUNE
    <feds-cdk-rotating-img
      [dayUrl]="'https://res.cloudinary.com/dd35qsdkl/image/upload/v1737976180/geb-images/NEB10.webp'"
      [size]="'70px'"/>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}
