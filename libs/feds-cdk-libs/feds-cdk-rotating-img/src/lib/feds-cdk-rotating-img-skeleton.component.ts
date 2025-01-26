// feds-cdk-rotating-img-skeleton.component.ts
import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'feds-cdk-rotating-img-skeleton',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="skeleton" [style.width]="size()" [style.height]="size()">
      <div class="pulse"></div>
    </div>
  `,
  styles: [`
    .skeleton {
      border-radius: 50%;
      overflow: hidden;
      position: relative;
      background-color: #e6f2ff;
    }
    .pulse {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, #e6f2ff 25%, #f6faff 50%, #fcfcff 75%);
      //background: linear-gradient(90deg, #f6faff 25%, #e6f2ff 50%, #c9e6ff 75%);
      background-size: 200% 100%;
      animation: pulse 1.5s infinite;
    }
    @keyframes pulse {
      0% {
        background-position: 200% 0;
      }
      100% {
        background-position: -200% 0;
      }
    }
  `]
})
export class FedsCdkRotatingImgSkeletonComponent {
  size = input.required<string>();
}