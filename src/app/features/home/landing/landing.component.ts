import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiDataService, Game } from '../../../services/api-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements OnInit {
  games$!: Observable<Game[]>;
  selectedCategory: string = 'all';

  constructor(private apiService: ApiDataService) {}

  ngOnInit(): void {
    this.games$ = this.apiService.getGames();
    this.games$.subscribe({
      next: (games) => console.log('Juegos recibidos:', games),
      error: (error) => console.error('Error:', error)
    });
  }

  calculateDiscountedPrice(price: number, discount: number): number {
    return price - (price * discount / 100);
  }
}
