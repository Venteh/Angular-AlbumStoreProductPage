import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs/Observable";
import { Album } from "./album";
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _albumUrl = '../assets/album.json';
  private _productsUrl = '../assets/products.json';

  constructor(private _http: HttpClient) { }

  getAlbum(id: number) : Observable<Album> {
    return this._http.get<any>(this._albumUrl).pipe(
      map(response => response.album as Album)
    );
  }

  getProducts() : Observable<Product[]> {
    return this._http.get<Product[]>(this._productsUrl);
  }


}
