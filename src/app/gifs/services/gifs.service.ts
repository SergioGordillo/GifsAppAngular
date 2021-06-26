import { HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gifs, SearchGifsResponse } from '../search-gifs/interfaces/search-gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private api_key: string="Lc0u9E4rl7pjIsJdbAdGS1W0DOgGfu1E";
  private urlService:string="https://api.giphy.com/v1/gifs";
  private _history: string[]=[];

  public results: Gifs[]=[];
  

  get history(){
    return [...this._history];
  }

  constructor(private http: HttpClient){
    this._history=JSON.parse(localStorage.getItem("history")!) || [];
    this.results=JSON.parse(localStorage.getItem("last_results")!)|| [];
  }

  searchGifs(query:string=''){
    
    query=query.trim().toLocaleLowerCase();

    if(!this._history.includes(query)){
      this._history.unshift(query);
      this._history=this._history.splice(0,10);

      localStorage.setItem("history", JSON.stringify(this._history));
    }

    const params=new HttpParams()
        .set('api_key', this.api_key)
        .set('limit', '10')
        .set('q', query); 


    this.http.get<SearchGifsResponse>(`${this.urlService}/search`, {params})
    .subscribe((resp)=>{
      this.results=resp.data;
      localStorage.setItem("last_results", JSON.stringify(this.results));
    })


  }


}
