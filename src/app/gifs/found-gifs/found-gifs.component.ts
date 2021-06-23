import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-found-gifs',
  templateUrl: './found-gifs.component.html',
  styles: [
  ]
})
export class FoundGifsComponent{

  get results(){
    return this.gifsService.results;
  }
  
  constructor(private gifsService:GifsService) { }



}
