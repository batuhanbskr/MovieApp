import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const movies = [
      { id: 1, name:"Movie 1", description: "güzel film", imageUrl: "1"},
      { id: 2, name:"Movie 2", description: "güzel film", imageUrl: "2"},
      { id: 3, name:"Movie 3", description: "güzel film", imageUrl: "3"},
      { id: 4, name:"Movie 4", description: "güzel film", imageUrl: "4"},
      { id: 5, name:"Movie 5", description: "güzel film", imageUrl: "5"},
      { id: 6, name:"Movie 6", description: "güzel film", imageUrl: "6"}
    ];
    return { movies };
  }
  constructor() { }
}
