
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  httpOptions:any;
  constructor(private http:HttpClient) { }

  getFeedback():Observable<any> {
    return this.http.get("http://localhost:3000/complaints")
  }

  postFeedback(obj:any):Observable<any>{
  
    this.httpOptions =  new HttpHeaders({
      'Content-Type':  'application/json',
    })
  
  return this.http.post("http://localhost:3000/complaints",obj,this.httpOptions);
  }
}