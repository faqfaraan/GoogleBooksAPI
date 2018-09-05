import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  isbn = '';
  bookObj: any = '';

  constructor( private http: HttpClient) {}

  ngOnInit(){}

  searchBook(){
    const obs = this.http.get('https://www.googleapis.com/books/v1/volumes?q=isbn:' + this.isbn);
    obs.subscribe((response) => console.log(response));
  }
}
