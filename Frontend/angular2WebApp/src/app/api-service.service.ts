import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8082/item';

export interface Item {
  id: any,
  price: any,
  name: string,
  description: string,
  fileName: string,
  fileType: string,
  contentType: string
}

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  getItemList(): Observable<Item[]> {
    return this.http.get<Item[]>(baseUrl);
  }
  deleteItem(id): Observable<any>{
    return this.http.delete<any>(baseUrl + '/' + id);
  }
  saveItem(data: any): Observable<any>{
  let formData = new FormData();
          formData.append('id', data.id);
          formData.append('name', data.name);
          formData.append('description', data.description);
          formData.append('price', data.price);
          formData.append('fileData', data.file);
    return this.http.post<any>(baseUrl, formData);
  }
  getItemById(id): Observable<any>{
    return this.http.get<any>(baseUrl + '/' + id);
  }
}
