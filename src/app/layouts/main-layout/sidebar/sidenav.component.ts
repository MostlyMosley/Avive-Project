import { Component, OnInit } from '@angular/core';
import {AviveRoutes, MasterRouteList} from '../../../../assets/nav-models';

@Component({
    moduleId: module.id,
    selector: 'avive-sidebar',
    templateUrl: 'sidenav.component.html',
})

export class SidenavComponent implements OnInit {
  navMenu: AviveRoutes[] = MasterRouteList;
  constructor() { }

  ngOnInit(): void {
  }
}
