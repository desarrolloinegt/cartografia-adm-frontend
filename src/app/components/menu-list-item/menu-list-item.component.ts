import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from 'src/app/app-material/app-material.module';

@Component({
  selector: 'app-menu-list-item',
  standalone: true,
  imports: [CommonModule, AppMaterialModule],
  templateUrl: './menu-list-item.component.html',
  styleUrls: ['./menu-list-item.component.scss']
})
export class MenuListItemComponent {

}
