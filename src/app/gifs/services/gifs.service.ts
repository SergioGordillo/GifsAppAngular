import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private api_key: string="Lc0u9E4rl7pjIsJdbAdGS1W0DOgGfu1E"
  // https://api.giphy.com/v1/gifs/search?api_key=Lc0u9E4rl7pjIsJdbAdGS1W0DOgGfu1E&q=madrid&limit=10
  private _history: string[]=[];

  public results: any[]=[];
  

  get history(){
    return [...this._history];
  }

  constructor(private http: HttpClient){}

  searchGifs(query:string=''){
    
    query=query.trim().toLocaleLowerCase();

    if(!this._history.includes(query)){
      this._history.unshift(query);
      this._history=this._history.splice(0,10);
    }


    this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=Lc0u9E4rl7pjIsJdbAdGS1W0DOgGfu1E&q=${query}&limit=10`)
    .subscribe((resp:any)=>{
      console.log(resp.data);
      this.results=resp.data;
    })


  }


}
