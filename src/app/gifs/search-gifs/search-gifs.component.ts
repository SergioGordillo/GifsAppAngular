import { Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-search-gifs',
  templateUrl: './search-gifs.component.html',
  styles: [
  ]
})
export class SearchGifsComponent{

@ViewChild('txtSearch') txtSearch!:ElementRef<HTMLInputElement>;

search(){

  const value=this.txtSearch.nativeElement.value;
  this.txtSearch.nativeElement.value='';
}

}
