import { Component } from '@angular/core';
import { NxWelcomeComponent } from '../../remote-entry/nx-welcome.component';

@Component({
  selector: 'trades-list',
  templateUrl: './trades-list.page.html',
  styleUrls: ['./trades-list.page.scss'],
  imports: [NxWelcomeComponent],
})
export class TradesListPageComponent {}