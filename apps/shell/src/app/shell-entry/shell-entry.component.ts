import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule} from '@angular/router';
import { FedsCdkSideNavComponent, IFedsCdkSideNavConfig } from '@feds/cdk/side-nav';
import { CommonModule } from '@angular/common';

@Component({
  imports: [
    RouterModule,
    CommonModule,
    FedsCdkSideNavComponent
  ],
  selector: 'shell-entry',
  templateUrl: './shell-entry.component.html',
  styleUrl: './shell-entry.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShellEntryComponent {
  menuConfig = signal<IFedsCdkSideNavConfig>({
    imgLogo: 'images/geb-logo-v3.webp',
    title: 'Galactic Energy Bazaar',
    items:  [
      {
        routeLink: 'dashboard',
        icon: 'analytics',
        label: 'Dashboard',
      },
      {
        routeLink: 'trades',
        icon: 'trending_up',
        label: 'Trade',
      }
    ]
  });
  labels = signal({
    logout: 'Logout',
  })
}
