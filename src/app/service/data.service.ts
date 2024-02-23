import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url:string = "http://localhost:8081/empl";

  constructor(private http: HttpClient) { }

  postData(emp:any): Observable<any> {
    return this.http.post(this.url,emp);
  }

  getAllData(): Observable<any> {
    return this.http.get(this.url);
  }

  delete(id:number):Observable<any> {
    return this.http.delete(this.url + "/" + id);
  }

  getById(id:number):Observable<any>{
    return this.http.get(this.url+"/"+id);
  }

  updateData(id:number, data:any):Observable<any> {
    return this.http.put(this.url+"/"+id,data);
  }
}
