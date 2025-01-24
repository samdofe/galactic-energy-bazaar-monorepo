import { Component, computed, HostListener, inject, OnInit, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FedsCdkSideNavComponent, IFedsCdkSideNavConfig, IFedsCdkSideNavMenuItem } from '@feds/cdk/side-nav';
import { CommonModule } from '@angular/common';

@Component({
  imports: [
    RouterModule,
    CommonModule,
    FedsCdkSideNavComponent
  ],
  selector: 'shell-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private router = inject(Router);
  isLeftSidebarCollapsed = signal<boolean>(false);
  screenWidth = signal<number>(window.innerWidth);

  title = 'shell';
  checked = false;
  disabled = false;
  // Parent component
/*  apps: IFedsCdkSideNavMenuItem[] = [
    { icon: 'analytics', label: 'Dashboard', routeLink: '/dashboard' },
    { icon: 'trending_up', label: 'Trades', routeLink: '/trades' },
  ];*/

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
      },
      {
        routeLink: 'login',
        icon: 'login',
        label: 'Login',
      }
    ]
  });

  @HostListener('window:resize')
  onResize() {
    this.screenWidth.set(window.innerWidth);
    if (this.screenWidth() < 768) {
      this.isLeftSidebarCollapsed.set(true);
    }
  }

  ngOnInit(): void {
    this.isLeftSidebarCollapsed.set(this.screenWidth() < 768);
  }

  changeIsLeftSidebarCollapsed(isLeftSidebarCollapsed: boolean): void {
    this.isLeftSidebarCollapsed.set(isLeftSidebarCollapsed);
  }

  onAppSelected({ label, routeLink }: { label: string; routeLink: string, icon: string }): void {
    console.log(`Navigating to ${routeLink} and ${label}`);
    this.router.navigate([routeLink]);
    // Implement your navigation logic here
  }

  // MAIN COMPONENT
  sizeClass = computed(() => {
    const isLeftSidebarCollapsed = this.isLeftSidebarCollapsed();
    if (isLeftSidebarCollapsed) {
      return '';
    }
    return this.screenWidth() > 768 ? 'main-content-trimmed' : 'main-content-md-screen';
  });
}
