import { Component } from '@angular/core';

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
}
