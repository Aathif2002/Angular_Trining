import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http:HttpClient) {}
  getServices():Observable<any> {
    return this.http.get("http://localhost:3000/products");
 }
 getDetails(id:number):Observable<any>{
  return this.http.get("http://localhost:3000/products/"+id)
}
 getFeedback():Observable<any> {
  return this.http.get("http://localhost:3000/compliants")
}

}

