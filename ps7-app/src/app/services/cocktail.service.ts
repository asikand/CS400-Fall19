import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import { Observable } from "rxjs";
import { Cocktail } from "../models/cocktailModel";

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  cocktailsRoute = 'http://localhost:3000/ps6';
  headers = new HttpHeaders();
  params = new HttpParams();

  getCocktails(): Observable<any> {
    return this.httpClient.get<Cocktail[]>(this.cocktailsRoute);
  }

  constructor(private httpClient: HttpClient) { }
}
