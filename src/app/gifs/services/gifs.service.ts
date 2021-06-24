import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gifs, SearchGifsResponse } from '../search-gifs/interfaces/search-gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private api_key: string="Lc0u9E4rl7pjIsJdbAdGS1W0DOgGfu1E"
  private _history: string[]=[];

  public results: Gifs[]=[];
  

  get history(){
    return [...this._history];
  }

  constructor(private http: HttpClient){
    this._history=JSON.parse(localStorage.getItem("history")!) || [];
  }

  searchGifs(query:string=''){
    
    query=query.trim().toLocaleLowerCase();

    if(!this._history.includes(query)){
      this._history.unshift(query);
      this._history=this._history.splice(0,10);

      localStorage.setItem("history", JSON.stringify(this._history));
    }


    this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=Lc0u9E4rl7pjIsJdbAdGS1W0DOgGfu1E&q=${query}&limit=10`)
    .subscribe((resp)=>{
      console.log(resp.data);
      this.results=resp.data;
    })


  }


}
