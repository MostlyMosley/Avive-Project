export const SideNavLinks: BaseNav[] = [
  {route: '', label: 'Home', icon: 'home', private: false},
  {route: 'admin', label: 'Admin', icon: 'admin_panel_settings', private: true},
  {route: 'tracking', label: 'Tracking', icon: 'analytics', private: false},
  {route: 'calendar', label: 'Calendar', icon: 'calendar_month', private: false},
  {route: 'profile', label: 'Profile', icon: 'person', private: false},
];

export interface BaseNav {
  route: string;
  label: string;
  icon: string;
  private: boolean;
}


