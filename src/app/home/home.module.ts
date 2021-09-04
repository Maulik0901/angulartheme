import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ComponentModule } from '../component/component.module';
import {SidebarService} from '../services/sidebar/sidebar.service';
@NgModule({
  declarations: [
    HomeComponent    
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    DashboardModule,
    ComponentModule    
  ],
  providers: [SidebarService]
})
export class HomeModule { }
