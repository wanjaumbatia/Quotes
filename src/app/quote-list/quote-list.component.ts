import { Quote } from '../qoute';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {

  quotes = [
    new Quote("Paulyne Wambui","Hell is real!","Paulyne"),
    new Quote("Francis Mbatia","Heaven for the climate hell for the company","Mbatia")
  ]
  constructor() { }

  ngOnInit(): void {
  }

  upvote(i){    
    this.quotes[i].upvote++
  }

  downvote(i){
    this.quotes[i].downvote++
  }
}
