import {
  ChangeDetectionStrategy,
  Component,
  input,
  OnInit,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import {
  ILeaderboard,
  ILeaderEntity,
} from '../../models/leaderboard-list.model';

@Component({
  selector: 'dashboard-leaderboard-list',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, MatTabsModule],
  templateUrl: './leaderboard-list.component.html',
  styleUrl: './leaderboard-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeaderboardListComponent implements OnInit {
  dataLeaderboard = input.required<ILeaderboard>();
  currentLeaderboard = signal<ILeaderEntity[]>([]);

  ngOnInit() {
    this.currentLeaderboard.set(this.dataLeaderboard().planetLeaderboard);
  }

  onTabChange(index: number) {
    this.currentLeaderboard.set(
      index === 0
        ? this.dataLeaderboard().planetLeaderboard
        : this.dataLeaderboard().traderLeaderboard
    );
  }
}
