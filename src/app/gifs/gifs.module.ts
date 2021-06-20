import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { SearchGifsComponent } from './search-gifs/search-gifs.component';
import { FoundGifsComponent } from './found-gifs/found-gifs.component';



@NgModule({
  declarations: [
    GifsPageComponent,
    SearchGifsComponent,
    FoundGifsComponent
  ],
  exports:[
    GifsPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
