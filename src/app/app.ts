import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/common/nav-bar-component/nav-bar-component';
import { CarouselComponent } from "./components/common/carousel-component/carousel-component";
import { MainViewComponent } from "./components/common/main-view-component/main-view-component";
import { ReadingPageComponent } from "./components/common/reading-page-component/reading-page-component";
import { ChaptersListComponent } from "./components/common/chapters-list-component/chapters-list-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent, MainViewComponent, ReadingPageComponent, ChaptersListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'einarComic';
}
