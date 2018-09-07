import { Component, OnInit } from '@angular/core';

import { Book } from '../book';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  books: Book[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getBooks()
    .subscribe(books => this.books = books);
  }

  add(title: string): void {
    title = title.trim();
    if (!title) { return; }
    this.heroService.addBook({ title } as Book)
      .subscribe(book => {
        this.books.push(book);
      });
  }

  delete(book: Book): void {
    this.books = this.books.filter(b => b !== book);
    this.heroService.deleteBook(book).subscribe();
  }

}
