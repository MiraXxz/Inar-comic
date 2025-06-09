import { Component } from '@angular/core';
import { ChaptersListComponent } from "../chapters-list-component/chapters-list-component";

@Component({
  selector: 'app-main-view-component',
  imports: [ChaptersListComponent],
  templateUrl: './main-view-component.html',
  styleUrl: './main-view-component.css'
})
export class MainViewComponent {
  logo_src: string = "images/logo-light.png";

}
