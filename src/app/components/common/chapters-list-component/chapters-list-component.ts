import { Component } from '@angular/core';
import { chapterItem } from '../nav-bar-component/nav-bar-component';
import { environment } from '../../../environments/environment';
import { AboutPage } from "../about-page/about-page";
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-chapters-list-component',
  imports: [AboutPage, MatIconModule],
  templateUrl: './chapters-list-component.html',
  styleUrl: './chapters-list-component.css'
})

export class ChaptersListComponent {

  display_horizontal: boolean = true; 
  chapters: chapterItem[] = environment.chaptersList;
}
