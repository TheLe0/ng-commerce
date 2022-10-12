import { Component } from '@angular/core';

import { Menu } from '../../models/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent {

  mainMenu: Menu = new Menu("Ng Commerce", "home");
  menus: Menu[] = [
    new Menu("Produtos", "#"),
    new Menu("Sobre", "about"),
    new Menu("Contato", "contact"),
    new Menu("Features", "#")
  ];

}
