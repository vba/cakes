
import { CakeDto } from './CakeDto'
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import {CakeMapper} from "./CakeMapper";
import {Observable} from "rxjs";


@Injectable()
export class CakeRepository {

    private readonly baseUrl: string = 'http://52.31.91.48:5000/api/cakes/';

    constructor(readonly http: Http) {
    }

    public getAll(): Observable<CakeDto[]> {
        return this.http.get(this.baseUrl)
            .map(x => x.json().map(y => CakeMapper.mapFromJson(y)));
    }

    public getById(id: number): Observable<CakeDto> {
        return Observable.onErrorResumeNext(this.http.get(this.baseUrl + id))
            .map(x => CakeMapper.mapFromJson(x.json()));
    }
}