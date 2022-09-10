import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';

export const MainLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent, data: {title: 'Dashboard'} },
    { path: 'user',           component: UserComponent, data: {title: 'Account'} },
    { path: 'table',          component: TableComponent, data: {title: 'Table'} },
    { path: 'notifications',  component: NotificationsComponent, data: {title: 'Notifications'} },
];

// {path: 'home', component: HomeComponent, data: {title: 'Home'}},
// {path: 'admin', component: AdminComponent, data: {title: 'Administration'}},
// {path: 'tracking', component: TrackingComponent, data: {title: 'Tracking'}},
// {path: 'calendar', component: CalendarComponent, data: {title: 'Calendar'}},
// {path: 'profile', component: ProfileComponent, data: {title: 'Profile'}},
