import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {
        "id": "1",
        "authors": 
      [
        {
          "id": "1",
          "name": "Francesco",
          "surname": "Bianco"
        }
      ],
        "title": "Breve guida alla sintassi italiana",
        "price": "10",
        "publisher": 
      {
        "id": "1",
        "name": "Cesati",
        "place": "Firenze"
      },
        "pages": 120
      },
      
      {
        "id": "2",
        "authors": 
      [
        {
          "id": "1",
          "name": "Francesco",
          "surname": "Bianco"
        },
        {
          "id": "2",
          "name": "Jiri",
          "surname": "Spicka"
        }
      ],
        "title": "Perché scrivere?",
        "price": "48",
        "publisher": 
      {
        "id": "1",
        "name": "Cesati",
        "place": "Firenze"
      },
        "pages": 600
      },
      
      {
        "id": "3",
        "authors": 
      [
        {
          "id": "3",
          "name": "Marcello",
          "surname": "Bolpagni"
        },
      ],
        "title": "La geografia del Decameron",
        "price": "8",
        "publisher": 
      {
        "id": "2",
        "name": "Prospero",
        "place": "Unknown"
      },
        "pages": 100
      },
      
      {
        "id": "4",
        "authors": 
      [
        {
          "id": "4",
          "name": "Primo",
          "surname": "Levi"
        },
      ],
        "title": "Se questo è un uomo",
        "price": "12",
        "publisher": 
      {
        "id": "3",
        "name": "Einaudi",
        "place": "Torino"
      },
        "pages": 200
      },
      
      {
        "id": "5",
        "authors": 
      [
        {
          "id": "4",
          "name": "Primo",
          "surname": "Levi"
        },
      ],
        "title": "La tregua",
        "price": "11",
        "publisher": 
      {
        "id": "3",
        "name": "Einaudi",
        "place": "Torino"
      },
        "pages": 180
      },
    ];
    return {heroes};
  }
}