import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  ngOnInit() {}

  closeSideBar: boolean = false;

  toggleSideBar() {
    this.closeSideBar = !this.closeSideBar;
  }

  onResize(event: any) {
    if (document.body.clientWidth > 992) this.closeSideBar = false;
  }
}
