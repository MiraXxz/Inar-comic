import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-nav-bar-component',
  imports: [NgOptimizedImage, RouterLink, MatIconModule],
  templateUrl: './nav-bar-component.html',
  styleUrl: './nav-bar-component.css'
})

export class NavBarComponent {

  logo_src: string = "images/logo.png";

  links: LinkItem[] = [
    {title: "Home", link: "/home", disabled: false}, // home icon
    {title: "Read", link: "#", disabled: false},
    // {title: "About", link: "/chaptersList", disabled: false},
    
    {title: "Characters", link: "#", disabled: true},
    
    {title: "Contact us", link: "#", disabled: true},
  ];



  chapters: chapterItem[] = environment.chaptersList;

}

export interface LinkItem {
  title: string, 
  link:string, 
  disabled: boolean,
}

export interface chapterItem {
  title: string, 
  link:string, 
  disabled: boolean,
  thumbNail: string,
  pages: number
}