import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Day } from './day';

@Injectable()
export class DayService {

    private daysUrl = 'api/days';  // URL to web api

    constructor(private http: Http) { }

    getDays(): Promise<Day[]> {
        return this.http.get(this.daysUrl)
            .toPromise()
            .then(response => response.json().data as Day[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    getDay(id: number): Promise<Day> {
        const url = `${this.daysUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Day)
            .catch(this.handleError);
    }
}