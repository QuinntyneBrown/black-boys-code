import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Donation } from "../models/donation.model";
import { Observable } from "rxjs/Observable";

@Injectable()
export class DonationsService {
    constructor(
        private _httpClient: HttpClient)
    { }

    public addOrUpdate(options: { donation: Partial<Donation>, correlationId: string }) {
        return this._httpClient
            .post(`${this._baseUrl}/api/donations/add`, options);
    }

    public get(): Observable<{ donations: Array<Donation> }> {
        return this._httpClient
            .get<{ donations: Array<Donation> }>(`${this._baseUrl}/api/donations/get`);
    }

    public getById(options: { id: number }): Observable<{ donation:Donation}> {
        return this._httpClient
            .get<{ donation: Donation }>(`${this._baseUrl}/api/donations/getById?id=${options.id}`);
    }

    public remove(options: { donation: Donation, correlationId: string }) {
        return this._httpClient
            .delete(`${this._baseUrl}/api/donations/remove?id=${options.donation.id}&correlationId=${options.correlationId}`);
    }

    public get _baseUrl() { return window["__BASE_URL__"]; }
}
