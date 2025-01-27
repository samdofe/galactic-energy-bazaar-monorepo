import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { IPlanetInfo } from '../../models/planet.model';
import { CurrencySymbolsPipe } from '../../pipes/currency-symbols.pipe';
import { FedsCdkRotatingImgComponent } from '@feds/cdk/rotating-img';

@Component({
  selector: 'dashboard-planets-list',
  imports: [CommonModule, MatExpansionModule, CurrencySymbolsPipe, FedsCdkRotatingImgComponent],
  templateUrl: './planets-list.component.html',
  styleUrl: './planets-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlanetsListComponent {
  readonly panelOpenState = signal(false);

  dataPlanet = input.required<IPlanetInfo[]>();
}
