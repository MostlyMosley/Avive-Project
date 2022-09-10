import { Component, OnInit } from '@angular/core';
import {BaseNav, SideNavLinks} from '../../../../assets/nav-models';

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidenav.component.html',
})

export class SidenavComponent implements OnInit {
  navMenu: BaseNav[] = SideNavLinks;
  constructor() { }

  ngOnInit(): void {
  }
}
