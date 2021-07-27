import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  faRobot,
  faTorah,
  faPray,
  faEgg,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      const shortcutType = params['shortcutType'];
      if (shortcutType) {
        let selectedSideBar = this.sideBarItem.find((ele) => {
          return (
            ele.shortcutType.toLocaleLowerCase() ===
            shortcutType.toLocaleLowerCase()
          );
        });

        if (!selectedSideBar) return;
        this.selectedId = selectedSideBar.id;
      }
    });
  }

  ngOnInit(): void {}

  selectedId: number = 1;

  sideBarItem = [
    {
      id: 1,
      name: '技術',
      shortcutType: 'Technology',
      icon: faRobot,
      marginHori: 15,
    },
    {
      id: 2,
      name: '食譜',
      shortcutType: 'Recipe',
      icon: faTorah,
      marginHori: 15,
    },
    {
      id: 3,
      name: '面試',
      shortcutType: 'Interview',
      icon: faPray,
      marginHori: 22,
    },
    {
      id: 4,
      name: '從無到有',
      shortcutType: 'ZeroToOne',
      icon: faEgg,
      marginHori: 15,
    },
  ];

  clickNavBar(id: any) {
    this.selectedId = id;
  }
}
