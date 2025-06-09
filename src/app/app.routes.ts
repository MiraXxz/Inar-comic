import { provideRouter, Routes } from '@angular/router';
import { ApplicationConfig } from '@angular/core';

import { MainViewComponent } from './components/common/main-view-component/main-view-component';
import { ReadingPageComponent } from './components/common/reading-page-component/reading-page-component';
import { ChaptersListComponent } from './components/common/chapters-list-component/chapters-list-component';

export const routes: Routes = [
    { path: 'home', component: MainViewComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'chaptersList', component: ChaptersListComponent },
    { path: 'comic/:ch/:page', component: ReadingPageComponent },
     { path: '**', component: MainViewComponent }
];


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};