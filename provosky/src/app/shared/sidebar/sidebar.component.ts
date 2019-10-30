import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../../model/menuItem';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menu: MenuItem[];

  constructor() {
    this.menu = new Array<MenuItem>()
    this.menu.push({
        label: 'Dashboard',
        routerLink: '/',
        isActive: false,
        icon: 'fas fa-tachometer-alt'
      },
      {
        label: 'Rubrica',
        routerLink: '',
        isActive: false,
        icon: 'fas fa-user',
        children: [
          { label: 'Lista Contatti', routerLink: '/listautenti', isActive: false, icon: 'fas fa-th-list' },
          { label: 'Nuovo Contatto', routerLink: '/nuovocontatto', isActive: false, icon: 'fas fa-edit' }
        ]
    },{
      label: 'Appuntamenti',
        routerLink: '/appuntamenti',
        isActive: false,
        icon: 'far fa-handshake'
    },{
      label: 'Animazioni',
        routerLink: '/animazioni',
        isActive: false,
        icon: 'far fa-handshake'
    }
    );
  }

  ngOnInit() {
  }

  setActive( father: MenuItem, item: MenuItem ) {
    this.deselectAll( this.menu );
    if( father.children && item != null) {
      item.isActive = true;
      father.isActive = true;
    } else {
      father.isActive = true;
    }
  }

  private deselectAll( menu: MenuItem[] ) {
    for(let item of menu ) {
      item.isActive = false;
      if( item.children ) {
        this.deselectAll( item.children );
      }
    }
  }

}
