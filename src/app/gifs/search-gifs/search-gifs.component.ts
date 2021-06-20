import { Component, ElementRef, ViewChild} from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search-gifs',
  templateUrl: './search-gifs.component.html',
})
export class SearchGifsComponent{

@ViewChild('txtSearch') txtSearch!:ElementRef<HTMLInputElement>;

constructor(private gifsService:GifsService){}

search(){

  const value=this.txtSearch.nativeElement.value;
  this.gifsService.searchGifs(value);
  this.txtSearch.nativeElement.value='';
}

}
