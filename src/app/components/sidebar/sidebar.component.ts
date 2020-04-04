import {Component} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {


  actions = [
    {
      title: 'Next',
      icon: 'right-circle',
      routeLink: 'next'
    },
    {
      title: 'Waiting',
      icon: 'coffee',
      routeLink: 'waiting'
    },
    {
      title: 'Scheduled',
      icon: 'clock-circle',
      routeLink: 'scheduled'
    },
    {
      title: 'Some Day',
      icon: 'snippets',
      routeLink: 'someday'
    },
  ];

  selectedIndex: number = this.actions.length;


  panels = [
    {
      active: true,
      name: 'Actions',
      disabled: false,
      customStyle: {}
    }
  ];

  setIndex(index: number) {
    this.selectedIndex = index;
  }

}
