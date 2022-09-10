import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from './sidenav.component';
import {MatIconModule} from "@angular/material/icon";

@NgModule({
    imports: [RouterModule, CommonModule, MatIconModule],
    declarations: [ SidenavComponent ],
    exports: [ SidenavComponent ]
})

export class SidenavModule {}
