import { provideRouter, Routes } from '@angular/router';
// import { provideRouter, Routes, withEnabledBlockingRender, renderMode } from '@angular/router';-

import { ApplicationConfig } from '@angular/core';

import { MainViewComponent } from './components/common/main-view-component/main-view-component';
import { ReadingPageComponent } from './components/common/reading-page-component/reading-page-component';
import { ChaptersListComponent } from './components/common/chapters-list-component/chapters-list-component';

export const routes: Routes = [
  { path: 'home', component: MainViewComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'chaptersList', component: ChaptersListComponent },
  // { path: 'comic/:ch/:page', component: ReadingPageComponent, renderMode: 'hydrate'},
  { path: 'comic/1/1-2', component: ReadingPageComponent},
  { path: 'comic/1/3-4', component: ReadingPageComponent},
  { path: 'comic/1/5-6', component: ReadingPageComponent},
  { path: 'comic/1/7-8', component: ReadingPageComponent},
  { path: 'comic/1/9-10', component: ReadingPageComponent},
  { path: 'comic/1/11-12', component: ReadingPageComponent},
  { path: 'comic/1/13-14', component: ReadingPageComponent},
  { path: 'comic/1/15-16', component: ReadingPageComponent},
  { path: 'comic/1/17-18', component: ReadingPageComponent},
  { path: 'comic/1/19-20', component: ReadingPageComponent},
  { path: 'comic/1/21-22', component: ReadingPageComponent},
  { path: 'comic/1/23-24', component: ReadingPageComponent},
  { path: 'comic/1/25-26', component: ReadingPageComponent},
  { path: 'comic/1/27-28', component: ReadingPageComponent},
  { path: 'comic/1/29-30', component: ReadingPageComponent},

  { path: '**', component: MainViewComponent }
];


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};