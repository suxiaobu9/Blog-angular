import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faRobot, faTorah, faPray } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      const shortCutType = params['shortCutType'];
      if (shortCutType) {
        let selectedSideBar = this.sideBarItem.find((ele) => {
          return (
            ele.shortCutType.toLocaleLowerCase() ===
            shortCutType.toLocaleLowerCase()
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
      shortCutType: 'Technology',
      icon: faRobot,
      marginHori: 15,
    },
    {
      id: 2,
      name: '食譜',
      shortCutType: 'Recipe',
      icon: faTorah,
      marginHori: 15,
    },
    {
      id: 3,
      name: '面試',
      shortCutType: 'Interview',
      icon: faPray,
      marginHori: 22,
    },
  ];

  clickNavBar(id: any) {
    this.selectedId = id;
  }
}
