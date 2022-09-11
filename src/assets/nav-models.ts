import {Route} from "@angular/router";
import {DashboardComponent} from "../app/pages/dashboard/dashboard.component";
import {AdminComponent} from "../app/pages/admin/admin.component";
import {CalendarComponent} from "../app/pages/calendar/calendar.component";
import {ProfileComponent} from "../app/pages/profile/profile.component";
import {TrackingComponent} from "../app/pages/tracking/tracking.component";

export const MasterRouteList: AviveRoutes[] = [
  {path: 'dashboard', title: 'Home', icon: 'home', private: false, class: '', component: DashboardComponent},
  {path: 'admin', title: 'Admin', icon: 'admin_panel_settings', private: true, class: '', component: AdminComponent},
  {path: 'tracking', title: 'Tracking', icon: 'analytics', private: false, class: '', component: TrackingComponent},
  {path: 'calendar', title: 'Calendar', icon: 'calendar_month', private: false, class: '', component: CalendarComponent},
  {path: 'profile', title: 'Profile', icon: 'person', private: false, class: '', component: ProfileComponent},
];

export interface AviveRoutes extends Route {
  path: string;
  title: string;
  icon: string;
  class: string;
  private: boolean;
}


