import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmprendedorDetail } from './emprendedor-detail';
import { Emprendedor } from './emprendedor';

@Injectable({
  providedIn: 'root'
})
export class EmprendedorService {

  constructor(private http: HttpClient) { }

  listUrl = "https://raw.githubusercontent.com/k-garces/ISIS2603_202520_S4_P2_Practica/refs/heads/main/json/emprendedores.json";

  detailUrl = "https://raw.githubusercontent.com/k-garces/ISIS2603_202520_S4_P2_Practica/refs/heads/main/json/"

  getEmprendedores(): Observable<Emprendedor[]> {
    return this.http.get<any[]>(this.listUrl);
  }

  getEmprendedorDetailed(id: String): Observable<Emprendedor> {
    const url = `${this.detailUrl}${id}/emprendedor.json`;
    return this.http.get<any>(url);
  }

}
