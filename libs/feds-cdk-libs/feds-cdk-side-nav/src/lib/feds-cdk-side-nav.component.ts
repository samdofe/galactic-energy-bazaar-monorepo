import { Component, signal, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'feds-cdk-side-nav',
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    RouterModule
  ],
  templateUrl: './feds-cdk-side-nav.component.html',
  styleUrl: './feds-cdk-side-nav.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class FedsCdkSideNavComponent {
  isOpen = signal(true);
  pageTitle = signal('E-Commerce Dashboard');
  isHandset = signal(false);

  toggleSidebar() {
    this.isOpen.update(value => !value);
  }
}
