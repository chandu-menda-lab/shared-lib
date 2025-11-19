import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SharedService {
  private _counter = 0;

  get counter() { return this._counter; }
  increment() { this._counter++; }
  reset() { this._counter = 0; }
}
