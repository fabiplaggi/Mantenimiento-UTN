import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SectorService {
  private apiUrl = 'http://localhost:3000/api/sectores';

  constructor(private http: HttpClient) {}

  getSectores(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  updateSector(id_sector: number, nombre: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id_sector}`, { nombre });
  }

  deleteSector(id_sector: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id_sector}`);
  }
}
