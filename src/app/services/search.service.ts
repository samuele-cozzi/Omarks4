import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class Search {
    public query: string;
    public searching: boolean = false;

    constructor() {}
}
