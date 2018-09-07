import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  books: Book[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks(): void {
    this.heroService.getBooks()
      .subscribe(books => this.books = books.slice(1, 5));
  }
}