import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { IPlanetInfo } from '../../models/planets-list.model';
import { CurrencySymbolsPipe } from '../../pipes/currency-symbols.pipe';

@Component({
  selector: 'dashboard-planets-list',
  standalone: true,
  imports: [CommonModule, MatExpansionModule, CurrencySymbolsPipe],
  templateUrl: './planets-list.component.html',
  styleUrl: './planets-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlanetsListComponent {
  readonly panelOpenState = signal(false);

  dataPlanet = input.required<IPlanetInfo[]>();
}
