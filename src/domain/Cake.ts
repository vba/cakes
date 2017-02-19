
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import {Observable} from "rxjs";
import {CakeAdditionCommand} from "./CakeAdditionCommand";
import {CakeReviewCommand} from "./CakeReviewCommand";

@Injectable()
export class Cake {

    private readonly baseUrl: string = 'http://52.31.91.48:5000/api/cakes/';

    constructor(readonly http: Http) {
    }

    public addCake(command: CakeAdditionCommand) : Observable<number> {
        return this.http.post(this.baseUrl, command)
            .map(x => x.status);
    }

    reviewCake(command: CakeReviewCommand) : Observable<number> {
        return this.http.put(this.baseUrl + command.id, command)
            .map(x => x.status);
    }
}