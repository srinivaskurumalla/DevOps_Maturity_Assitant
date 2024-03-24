import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  private apiUrl = 'http://localhost:3000/centene'
  isSidebarOpen: boolean = true
  http = inject(HttpClient)
  totalData: any[] = []
  allScores: { item: string, identifier: string, value: number }[] = []

  constructor() { }



  //   addOrUpdateData(data: any[]): Observable<any> {
  //     return new Observable(observer => {
  //         this.getDataByItemAndIdentifier(data[0].item).subscribe(
  //             (dataExists: any[]) => {
  //                 if (dataExists && dataExists.length > 0) {
  //                     this.updateData(data).subscribe(
  //                         (res) => {
  //                             console.log('Data updated');
  //                             observer.next(res); // Emitting success response
  //                             observer.complete(); // Completing the observable
  //                         },
  //                         (err) => {
  //                             console.error('Update error:', err);
  //                             observer.error(err); // Emitting error
  //                         }
  //                     )
  //                 } else {
  //                     this.addData(data).subscribe(
  //                         (res) => {
  //                             console.log('Data added');
  //                             observer.next(res); // Emitting success response
  //                             observer.complete(); // Completing the observable
  //                         },
  //                         (err) => {
  //                             console.error('Add error:', err);
  //                             observer.error(err); // Emitting error
  //                         }
  //                     )
  //                 }
  //             },
  //             (err) => {
  //                 console.error('Error checking existing data:', err);
  //                 observer.error(err); // Emitting error
  //             }
  //         );
  //     });
  // }

  addData(data: any): Observable<any> {
    debugger
    //const dataWithId = data.map((item, index) => ({ id: index + 1, ...item }));
    return this.http.post<any>(this.apiUrl, data);
  }
  updateData(data: any, id:number): Observable<any> {
    debugger
    return this.http.put<any>(`${this.apiUrl}/${id}`, data);

  }
  getDataByItemAndIdentifier(name: string): Observable<any[]> {
    return new Observable(observer => {
      this.getAllData().subscribe(
        (data) => {
          this.totalData = data;
          console.log('total data', this.totalData);
          debugger
          // Filter data based on name
          //const filteredData = this.totalData.flatMap(dataArray => dataArray.filter((item: any) => item.item === name));
          const filteredData = this.totalData.filter((item: any) => item.item === name);
          if (filteredData.length > 0) {
            observer.next(filteredData); // Emit filtered data
          } else {
            observer.next([]); // Emit empty array if no matching items are found
          }
          observer.complete(); // Complete the observable
        },
        (error) => {
          console.error('Error fetching data:', error);
          observer.error(error); // Emit error if any
        }
      );
    });
  }
  getAllData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
