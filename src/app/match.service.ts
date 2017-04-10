import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Match } from './match';

@Injectable()
export class MatchService {

    private matchsUrl = 'api/matchs';  // URL to web api

    constructor(private http: Http) { }

    getMatchs(): Promise<Match[]> {
        return this.http.get(this.matchsUrl)
            .toPromise()
            .then(response => response.json().data as Match[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    getMatch(id: number): Promise<Match> {
        const url = `${this.matchsUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Match)
            .catch(this.handleError);
    }
}