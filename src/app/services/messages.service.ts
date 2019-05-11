import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  messages: string[] = [];

  constructor() { }

  add(message: string): MessagesService
  {
    this.messages.push(message);
    return this;
  }

  clear(): MessagesService
  {
    this.messages = [];
    return this;
  }
}
