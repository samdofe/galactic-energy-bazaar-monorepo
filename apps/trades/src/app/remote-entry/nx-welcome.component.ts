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
      [dayUrl]="'https://www.solarsystemscope.com/textures/download/2k_earth_daymap.jpg'"
      [nightUrl]="'https://www.solarsystemscope.com/textures/download/2k_earth_nightmap.jpg'"
      [cloudsUrl]="'https://www.solarsystemscope.com/textures/download/2k_earth_clouds.jpg'"
      [size]="'200px'"/>
    MERCURY
    <feds-cdk-rotating-img
      [dayUrl]="'https://www.solarsystemscope.com/textures/download/2k_mercury.jpg'"
      [size]="'70px'"
      [shadowColor]="'#a2b0bd'" 
    />
    VENUS
    <feds-cdk-rotating-img
      [dayUrl]="'https://www.solarsystemscope.com/textures/download/2k_venus_surface.jpg'"
      [size]="'70px'"
      [shadowColor]="'#e6993b'"
    />
    V ATHMOSPHERE
    <feds-cdk-rotating-img
      [dayUrl]="'https://www.solarsystemscope.com/textures/download/2k_venus_atmosphere.jpg'"
      [size]="'70px'"
      [shadowColor]="'#d9bc8e'"
    />
    MARS
    <feds-cdk-rotating-img
      [dayUrl]="'https://www.solarsystemscope.com/textures/download/2k_mars.jpg'"
      [size]="'70px'"
      [shadowColor]="'#d97557'"
    />
    JUPITER
    <feds-cdk-rotating-img
      [dayUrl]="'https://www.solarsystemscope.com/textures/download/2k_jupiter.jpg'"
      [size]="'70px'"
      [shadowColor]="'#a2b0bd'"
    />
    SATURN
    <feds-cdk-rotating-img
      [dayUrl]="'https://www.solarsystemscope.com/textures/download/2k_saturn.jpg'"
      [size]="'70px'"
      [shadowColor]="'#e9dec9'"
    />
    ALPHA (SATURN RING)
    <feds-cdk-rotating-img
      [dayUrl]="'https://www.solarsystemscope.com/textures/download/2k_saturn_ring_alpha.png'"
      [size]="'70px'"
      [shadowColor]="'#625e5a'"
    />
    URANUS
    <feds-cdk-rotating-img
      [dayUrl]="'https://www.solarsystemscope.com/textures/download/2k_uranus.jpg'"
      [size]="'70px'"
      [shadowColor]="'#97c5cf'"
    />
    NEPTUNE
    <feds-cdk-rotating-img
      [dayUrl]="'https://www.solarsystemscope.com/textures/download/2k_neptune.jpg'"
      [size]="'70px'"/>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}
