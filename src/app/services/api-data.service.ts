import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface Game {
  id: number;
  title: string;
  description: string;
  price: number;
  discount: number;
  image: string;
  category: string;
}

interface ApiResponse {
  games: Game[];
}

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {
  private apiUrl = 'https://api-juegosdemesa.s3.us-east-2.amazonaws.com/games.json';

  constructor(private http: HttpClient) { }

  getGames(): Observable<Game[]> {
    return this.http.get<ApiResponse>(this.apiUrl).pipe(
      map(response => response.games)
    );
  }

  getGamesByCategory(category: string): Observable<Game[]> {
    return this.getGames().pipe(
      map(games => games.filter(game => game.category === category))
    );
  }
}
