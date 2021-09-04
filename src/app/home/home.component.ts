import { Component, OnInit } from '@angular/core';
import {SidebarService} from '../services/sidebar/sidebar.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // isOpenSidbar: any;
  constructor(public sidebarService: SidebarService) { 
    // console.log(this.sidebarService.isOpenSidebar)
    // this.isOpenSidbar = this.sidebarService.isOpenSidebar;
  }

  ngOnInit(): void {
    // console.log("home component")
  }
  
  get isSidebarVisible(): any {
    return this.sidebarService.isOpenSidebar;
  }

  


}
