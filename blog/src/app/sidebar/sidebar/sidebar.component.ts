import { Component, OnInit } from '@angular/core';
import { faRobot, faTorah, faPray } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  selectedId: number = 1;

  sideBarItem = [
    {
      id: 1,
      name: '技術',
      href: '#',
      icon: faRobot,
      marginHori: 10,
    },
    {
      id: 2,
      name: '食譜',
      href: '#',
      icon: faTorah,
      marginHori: 10,
    },
    {
      id: 3,
      name: '面試',
      href: '#',
      icon: faPray,
      marginHori: 15,
    },
  ];

  clickNavBar(id: any) {
    this.selectedId = id;
  }
}
