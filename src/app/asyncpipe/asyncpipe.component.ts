import { Component, OnInit } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Component({
  selector: 'app-asyncpipe',
  templateUrl: './asyncpipe.component.html',
  styleUrls: ['./asyncpipe.component.css']
})
export class AsyncpipeComponent implements OnInit {
  asyncPromise: Promise<string> | undefined;
  asyncObservable: Observable<string> | undefined;
  constructor() { }

  ngOnInit(): void {
    this.asyncPromise = this.conPromise('Promise');
    this.asyncObservable = this.conObservable('Observable');

  }
  conPromise(value: string): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(value), 2000);
    })
  }
  conObservable(value: string): Observable<string> {
    return of(value).pipe(delay(2000));
  }
}

