import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public img_escudo =  environment.img+"escudo_hogwarts.png";

  constructor() {
  }

  ngOnInit(): void {
    
  }

}
