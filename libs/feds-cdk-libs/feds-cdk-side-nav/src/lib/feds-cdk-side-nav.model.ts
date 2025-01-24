export interface IFedsCdkSideNavMenuItem {
  icon: string;
  label: string;
  routeLink: string;
}

export interface IFedsCdkSideNavConfig {
  imgLogo?: string;
  items: IFedsCdkSideNavMenuItem[];
  title: string;
}