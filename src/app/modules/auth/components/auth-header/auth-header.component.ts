import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from 'src/app/app-material/app-material.module';

@Component({
  selector: 'app-auth-header',
  standalone: true,
  imports: [CommonModule, AppMaterialModule],
  templateUrl: './auth-header.component.html',
  styleUrls: ['./auth-header.component.scss']
})
export class AuthHeaderComponent {

}
