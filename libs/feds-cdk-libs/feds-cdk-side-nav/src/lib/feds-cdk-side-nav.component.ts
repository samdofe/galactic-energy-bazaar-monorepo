import { Component, computed, input, signal, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { IFedsCdkSideNavConfig } from './feds-cdk-side-nav.model';

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
  config = input.required<IFedsCdkSideNavConfig>();
  imgLogo = computed(()=> this.config().imgLogo);
  items = computed(()=> this.config().items);
  pageTitle = computed(()=> this.config().title);
  isOpen = signal(true);
  isHandset = signal(false);

  toggleSidebar() {
    this.isOpen.update(value => !value);
  }
}
