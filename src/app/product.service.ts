import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs/Observable";
import { Album } from "./album";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _albumUrl = '../assets/album.json';

  constructor(private _http: HttpClient) { }

  getAlbum(id: number) : Observable<Album> {
    return this._http.get<any>(this._albumUrl).pipe(
      map(response => response.album as Album)
    );
  }
}
