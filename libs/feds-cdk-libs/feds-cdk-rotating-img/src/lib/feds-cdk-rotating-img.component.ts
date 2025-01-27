// feds-cdk-rotating-img.component.ts
import { Component, ViewEncapsulation, ChangeDetectionStrategy, input, Signal, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FedsCdkRotatingImgSkeletonComponent } from './feds-cdk-rotating-img-skeleton.component';

@Component({
  selector: 'feds-cdk-rotating-img',
  standalone: true,
  imports: [CommonModule, FedsCdkRotatingImgSkeletonComponent],
  templateUrl: './feds-cdk-rotating-img.component.html',
  styleUrls: ['./feds-cdk-rotating-img.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FedsCdkRotatingImgComponent {
  dayUrl = input.required<string>();
  nightUrl = input<string | undefined>('https://www.solarsystemscope.com/textures/download/2k_earth_nightmap.jpg');
  cloudsUrl = input<string | undefined>();
  size = input<string>('80px');
  shadowColor = input<string | undefined>('#5e90f1'); // New input for shadow color with default value

  private _imagesLoaded = signal(false);
  imagesLoaded: Signal<boolean> = this._imagesLoaded.asReadonly();

  constructor() {
    effect(() => {
      const imagesToLoad = [this.dayUrl(), this.nightUrl(), this.cloudsUrl()].filter(Boolean);
      let loadedCount = 0;

      imagesToLoad.forEach(url => {
        const img = new Image();
        img.onload = () => {
          loadedCount++;
          if (loadedCount === imagesToLoad.length) {
            this._imagesLoaded.set(true);
          }
        };
        img.src = url ?? '';
      });
    });
  }
}