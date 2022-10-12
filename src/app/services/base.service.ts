import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BaseService<T> {
    protected readonly baseUrl: string = "http://localhost:3000/";
    protected endpoint: string = '';

    constructor(private http: HttpClient) { }

    getAll(): Observable<T[]> {
        return this.http.get<T[]>(this.baseUrl + this.endpoint)
    }
}