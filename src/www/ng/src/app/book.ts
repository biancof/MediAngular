import { Author } from './author';
import { Publisher } from './publisher';

export class Book {
  id: number;
  authors: Author[];
  title: string;
  price: number;
  publisher: Publisher;
  pages: number;
}
