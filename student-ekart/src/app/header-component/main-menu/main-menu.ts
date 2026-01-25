import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'main-menu',
  imports: [CommonModule],
  templateUrl: './main-menu.html',
  styleUrl: './main-menu.css'
})
export class MainMenu {
    mainMenuItems:string[] = ['Home','Products','Sale','New Arrival','Contact','Services']
}
