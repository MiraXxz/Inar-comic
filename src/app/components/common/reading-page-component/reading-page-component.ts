import { Component, inject } from '@angular/core';
import { chapterItem, LinkItem } from '../nav-bar-component/nav-bar-component';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../environments/environment';
import {MatIconModule} from '@angular/material/icon'
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-reading-page-component',
  imports: [MatIconModule, FormsModule],
  templateUrl: './reading-page-component.html',
  styleUrl: './reading-page-component.css'
})
export class ReadingPageComponent {

  img1: string = "";
  img2: string = "";

  private activatedRoute = inject(ActivatedRoute);

  selectedChapter: number = 0;
  selectedPage: number = 0;

  loading_status_1: string = "";
  loading_status_2: string = "";
  loading_image: string = "images/logo-loading.gif";

  

  pages : LinkItem[] = [];

  chapters: chapterItem[]= environment.chaptersList;

  makePagesList(pages: number): LinkItem[] {
    let result: LinkItem[] = [];
    for(let i = 1; i<= pages; i+=2){
      if(pages%2 != 0 && i == pages) {
        result.push({title: i+"" , link: "#", disabled: false})
      }
      else result.push({title: i + " - " + (i+1) , link: "#", disabled: false})
    }

    return result;
  }

  selectChapter(event: any, isPage: boolean = false) : void {

    console.log("SELECT CHAPTER")
    console.log(event.target.value)

    if(!isPage) {
      this.selectedChapter = event.target.value -1;
      this.pages = this.makePagesList(this.chapters[this.selectedChapter].pages); 
    }

    else {
      this.selectedPage = event.target.value;

      this.setPagesUrl(event.target.value)
    }
  }

  getImageUrl(chapter: number, page: string): string {
    console.log("chapters/ch"+chapter+"/" + page+ ".png")
    return "chapters/ch"+chapter+"/" + page+ ".png";
  }

  changePage(next: boolean = true){

    this.loading_status_1= "";
    this.loading_status_2= "";

    let goToPage = -1;
    let goToChapter = -1;

    if(this.selectedPage == 0){
      if(this.selectedChapter >= 1) {
        // set chapter and go to last page
        goToChapter = this.selectedChapter--;
        let chPagesCount = this.chapters[goToChapter].pages;
        goToPage = chPagesCount/2;

        if(chPagesCount%2 != 0) goToPage++;
      }
      goToChapter = -1;
      goToPage = -1;
    }

    this.setPagesUrl(next ? ++this.selectedPage : --this.selectedPage)
  }

  disablePrevious(){
    let previousChapter = this.chapters[this.selectedChapter-1];
    let previousPage = this.pages[this.selectedPage-1]

    console.log(previousChapter, previousPage)
    return (this.chapters[this.selectedChapter-1].disabled == true || (this.selectedChapter == 0 && this.selectedPage == 0))
  }

  setPagesUrl(pageIndex: number){

    console.log("SET PAGES URL", pageIndex)
   
      let pages_arr = this.pages[pageIndex].title.split("-")
     
      this.img1 = this.getImageUrl(this.selectedChapter+1, pages_arr[0].replace(' ', ""));
      this.img2 = this.getImageUrl(this.selectedChapter+1, pages_arr[1].replace(' ', ""));

      this.loading_status_1 = "loading";
      this.loading_status_2 = "loading";
  }

  setLoadingStatus(first: boolean){
    console.log("IMAGE IS LOADED")
    if (first) this.loading_status_1 = "loaded";
    else this.loading_status_2 = "loaded";
  }

  ngOnInit(): void {
    let ch = this.activatedRoute.snapshot.paramMap.get('ch')
    if(ch == null) ch = "1";
    let chapter = parseInt(ch);

    let page = this.activatedRoute.snapshot.paramMap.get('page')
    if(page == null) page = "1-2";

    console.log(ch, page)

    this.setChapter(chapter, this.getPagesIndex(page)); 
  }

  setChapter(chapter: number, pages: number){
    this.selectedChapter = chapter -1;
    this.pages = this.makePagesList(this.chapters[this.selectedChapter].pages); 

    this.selectedPage = pages;
    this.setPagesUrl(pages)
  }

  getPagesIndex(pages: string){

    let temp = pages.replace("-", " - ")
    for (let i = 0; i < this.pages.length; i++) {
      const element = this.pages[i];

      if(element.title == temp) return i;
      
    }
    return 0;
  }

  getTitle(){
    return "Chapter "+ (this.selectedChapter+1) + ", Page " + ( this.pages[this.selectedPage].title )
  }

}
