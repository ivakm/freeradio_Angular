import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LastNewsService {

  constructor(private http: HttpClient) {
  }

  getLastNews() {
    return this.http.get(`lastNewsHTTP`);
  }
}
