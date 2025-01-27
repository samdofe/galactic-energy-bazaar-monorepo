// feds-cdk-rotating-img-skeleton.component.ts
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'feds-cdk-rotating-img-skeleton',
  imports: [CommonModule],
  template: `
    <div class="skeleton" [style.width]="size()" [style.height]="size()">
      <div class="pulse"></div>
    </div>
  `,
  styleUrl: './feds-cdk-rotating-img-skeleton.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FedsCdkRotatingImgSkeletonComponent {
  size = input.required<string>();
}