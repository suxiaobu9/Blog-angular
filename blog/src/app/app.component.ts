import { Component } from '@angular/core';
import { faRobot, faTorah, faPray } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  ngOnInit() {}

  closeSideBar: boolean = false;
  sideBarItem = [
    {
      name: '技術',
      href: '#',
      icon: faRobot,
      marginHori: 10,
    },
    {
      name: '食譜',
      href: '#',
      icon: faTorah,
      marginHori: 10,
    },
    {
      name: '面試',
      href: '#',
      icon: faPray,
      marginHori: 15,
    },
  ];

  toggleSideBar() {
    this.closeSideBar = !this.closeSideBar;
  }
}
