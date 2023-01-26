import { Component } from '@angular/core';
import { ActivatedRoute, Params, Route } from '@angular/router';

@Component({
  selector: 'app-home-project-page',
  templateUrl: './home-project-page.component.html',
  styleUrls: ['./home-project-page.component.scss']
})
export class HomeProjectPageComponent {
  project!:string;
  constructor(private routes:ActivatedRoute){
  }

  ngOnInit(){
    this.project=localStorage.getItem('project')||'';
  }
}
