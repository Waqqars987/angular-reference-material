import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Fake } from './fake';

@Injectable()
export class FakeService {

    constructor(private http: HttpClient) { }
    display(): string {
        return "Welcome to Service using DI";
    }

    // loadEmlpoyeeInfo(): void {
    //     this.http.get('http://dummy.restapiexample.com/api/v1/employees')
    //         .subscribe(
    //             data => { console.log(data); },
    //             error => console.log(error),
    //             () => { console.log("Completed!"); }
    //         );
    // }

    loadEmlpoyeeInfo(): Observable<Fake[]> {
        return this.http.get<Fake[]>('http://dummy.restapiexample.com/api/v1/employees');
    }

    checkById(empId: number): Observable<any> {
        return this.http.get('http://dummy.restapiexample.com/api/v1/employee/' + empId);
    }

    storeEmpInfo(empRef: any): Observable<any> {
        return this.http.post("http://dummy.restapiexample.com/api/v1/create", empRef);
    }
}