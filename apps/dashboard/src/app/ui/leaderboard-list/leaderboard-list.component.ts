import {
  ChangeDetectionStrategy,
  Component,
  input,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import {
  ILeaderboard,
} from '../../models/leaderboard.model';
import { TranslateModule } from '@ngx-translate/core';
import { FedsCdkRotatingImgComponent } from '@feds/cdk-rotating-img';

@Component({
  selector: 'dashboard-leaderboard-list',
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    TranslateModule,
    FedsCdkRotatingImgComponent,
  ],
  templateUrl: './leaderboard-list.component.html',
  styleUrl: './leaderboard-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeaderboardListComponent {
  dataLeaderboard = input.required<ILeaderboard>();
  selectedTab = signal<number>(0);

  onTabChange(index: number) {
    this.selectedTab.set(index);
  }
}
