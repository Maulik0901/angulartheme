import { Component, OnInit } from '@angular/core';
import { faTachometerAlt,faIcons,faMap,faBell,faUser } from '@fortawesome/free-solid-svg-icons';
import {SidebarService} from '../../services/sidebar/sidebar.service';
declare interface RouteInfo {
  name: string;
  path: string;  
  icon: any;
  class: string;
  iconColor: string;
  isSelected: Boolean;
}
export const SIDEBARITEM:RouteInfo[] = [
  {
    "name": 'dashboard',
    "path": "/dashboard",
    "icon": faTachometerAlt,
    "class": '',
    iconColor: "#fff",
    isSelected: false
  },
  {
    path: "/icons",
    name: "Icons",    
    icon: faIcons,
    class: "",
    iconColor: "#fff",
    isSelected: false
  },
  {
    path: "/maps",
    name: "Maps",    
    icon: faMap,
    class: "",
    iconColor: "#fff",
    isSelected: false 
  },
  {
    path: "/notifications",
    name: "Notifications",    
    icon: faBell,
    class: "",
    iconColor: "#fff",
    isSelected: false
  },

  {
    path: "/user",
    name: "User Profile",    
    icon: faUser,
    class: "",
    iconColor: "#fff",
    isSelected: false
  }  
]

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  // faCoffee = faCoffee;
  isSwitchOn: Boolean = true; 
  showFullSidebar!: HTMLElement;

  menuItem: any[] = [];
  constructor(public sideBarServices: SidebarService) {    
    this.isSwitchOn = this.sideBarServices.isOpenSidebar;
  }

  ngOnInit(): void {
    this.menuItem = SIDEBARITEM.map(item => item);
  }

  onChangeSwitch(event: any) {
    // console.log(this.showFullSidebar.classList)
    this.sideBarServices.toggleOpenSidebar();
    //this.isSwitchOn = event;
  }

  onSelectRoute(menu: any,index: any){ 
    
    let sidebar = SIDEBARITEM.map(item => {
      item.isSelected = false;
      item.class = "";
      return item;
    });
    
    menu.isSelected = true;
    menu.class = "selected";
    sidebar[index] = menu;
    this.menuItem = sidebar;

  }

}
