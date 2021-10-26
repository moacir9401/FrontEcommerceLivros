import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class BooksService {
  private url = 'https://localhost:44379/api/Livraria';

httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'MyClientCert': '',        // This is empty
    'MyToken': ''    ,})
}

  constructor(private http: HttpClient) {}

  getBook(){
      return this.http.get(this.url,this.httpOptions);
  }
}
