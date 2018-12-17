import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, filter, switchMap } from 'rxjs/operators';
import { pipe } from '@angular/core/src/render3';

@Injectable()
export class DataService {

  result: any;

  constructor(private _http: HttpClient) {}

  getPrices() {
    return this._http.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,IOT&tsyms=USD')
    .pipe(map(result => this.result = result));
  }

}
