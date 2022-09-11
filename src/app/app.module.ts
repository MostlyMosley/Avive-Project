import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";
import { SidenavModule } from './layouts/main-layout/sidebar/sidenav.module';
import { FooterModule } from './layouts/main-layout/footer/footer.module';
import { NavbarModule} from './layouts/main-layout/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AdminComponent } from './pages/admin/admin.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TrackingComponent } from './pages/tracking/tracking.component';


@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    AdminComponent,
    CalendarComponent,
    ProfileComponent,
    TrackingComponent
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes),
    SidenavModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
