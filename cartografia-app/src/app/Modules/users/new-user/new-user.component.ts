import { Component } from '@angular/core';


export interface PeriodicElement {
  name: string;
  position: number;
  last_name: string;
  email: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Juan', last_name: 'Perez', email: 'juan_perez4@hotmail.com'},
  {position: 2, name: 'Pedro', last_name: 'Escobar', email: 'escoba_peter@hotmail.com'},
  {position: 3, name: 'Diego', last_name: 'Hernandez', email: 'diegoH98_@hotmail.com'},
  {position: 4, name: 'Lisseth', last_name: 'Robles', email: 'liro87@hotmail.com'},
  {position: 5, name: 'María', last_name: 'Andrade', email: 'mar_an1998@hotmail.com'},
];

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
}
