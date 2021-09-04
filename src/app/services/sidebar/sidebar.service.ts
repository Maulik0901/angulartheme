import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  public isOpenSidebar: Boolean = true; 
  sidebarVisibilityChange: Subject<boolean> = new Subject<boolean>();
  constructor() {
    
    this.sidebarVisibilityChange.subscribe((value: any) => {      
      this.isOpenSidebar = value
    });

  }

  toggleOpenSidebar(){    
    // this.isOpenSidebar = !this.isOpenSidebar;
    this.sidebarVisibilityChange.next(!this.isOpenSidebar);
  }

}
