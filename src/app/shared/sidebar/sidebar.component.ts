import { Component} from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent{

  get history(){
    return this.gifsService.history;
  }

  constructor(private gifsService:GifsService){}

  searchGifs(query:string){

    this.gifsService.searchGifs(query);

  }

}
