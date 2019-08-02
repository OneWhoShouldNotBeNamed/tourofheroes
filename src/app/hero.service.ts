import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heros';
import { Observable, of } from 'rxjs';
import {MessageService} from './message.service';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  /*
  getHeroes(): Hero[] {
    return HEROES;
  }*/
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService:fetchedheroes');
    return of(HEROES);
  }
  constructor(private messageService:MessageService) { }
}
