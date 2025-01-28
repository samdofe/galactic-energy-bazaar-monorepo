import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'dashboard-planets-list-header',
  imports : [MatExpansionModule],
  templateUrl: './planets-list-header.component.html',
  styleUrls: ['./planets-list-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlanetsListHeaderComponent {}