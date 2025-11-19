import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmprendedorService {

  constructor(private http: HttpClient) { }

  listUrl = "https://raw.githubusercontent.com/k-garces/ISIS2603_202520_S4_P2_Practica/refs/heads/main/json/emprendedores.json";

  detailUrl = "https://raw.githubusercontent.com/k-garces/ISIS2603_202520_S4_P2_Practica/refs/heads/main/json/"

  getEmprendedores(): Observable<any[]> {
    return this.http.get<any[]>(this.listUrl);
  }

  getEmprendedorDetailed(id: number): Observable<any[]> {
    const url = `${this.detailUrl}${id}/emprendedor.json`;
    return this.http.get<any>(url);
  }

}
