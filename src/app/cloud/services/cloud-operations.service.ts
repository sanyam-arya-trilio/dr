import { Injectable } from '@angular/core';
import { INewCloud, IDomainScoped, ICloud } from 'src/app/interfaces';
import { getData } from 'src/app/utilities';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CloudOperationsService {
  // For data sharing
  allData: INewCloud[] = [
    {
      id:"1",
      name: 'OneCloud',
      domain: 'admin',
      is_responding: true,
      url: 'http://thisisawesome:5050/v2',
      user: 'admin'
    },
    {
      id:"2",
      name: 'Cloud Two',
      domain: 'admin',
      is_responding: true,
      url: 'http://thisisnotsoawesome:5050/v2',
      user: 'admin'
    },
    {
      id:"3",
      name: 'OneCloud',
      domain: 'admin',
      is_responding: true,
      url: 'http://thisisawesome:5050/v2',
      user: 'admin'
    },
    {
      id:"4",
      name: 'Cloud Two',
      domain: 'admin',
      is_responding: false,
      url: 'http://thisisnotsoawesome:5050/v2',
      user: 'admin'
    },
    {
      id:"5",
      name: 'OneCloud',
      domain: 'admin',
      is_responding: true,
      url: 'http://thisisawesome:5050/v2',
      user: 'admin'
    },
    {
      id:"6",
      name: 'Cloud Two',
      domain: 'admin',
      is_responding: false,
      url: 'http://thisisnotsoawesome:5050/v2',
      user: 'admin'
    },
    {
      id:"7",
      name: 'OneCloud',
      domain: 'admin',
      is_responding: true,
      url: 'http://thisisawesome:5050/v2',
      user: 'admin'
    },
    {
      id:"8",
      name: 'Cloud Two',
      domain: 'admin',
      is_responding: false,
      url: 'http://thisisnotsoawesome:5050/v2',
      user: 'admin'
    },
    {
      id:"9",
      name: 'OneCloud',
      domain: 'admin',
      is_responding: true,
      url: 'http://thisisawesome:5050/v2',
      user: 'admin'
    },
    {
      id:"10",
      name: 'Cloud Two',
      domain: 'admin',
      is_responding: false,
      url: 'http://thisisnotsoawesome:5050/v2',
      user: 'admin'
    },
    {
      id:"11",
      name: 'OneCloud',
      domain: 'admin',
      is_responding: true,
      url: 'http://thisisawesome:5050/v2',
      user: 'admin'
    },
    {
      id:"12",
      name: 'Cloud Two',
      domain: 'admin',
      is_responding: false,
      url: 'http://thisisnotsoawesome:5050/v2',
      user: 'admin'
    }
  ];
  private cloudData = new BehaviorSubject(this.allData);

  currentCloudData = this.cloudData.asObservable();

  addNewCloud(newCloud: INewCloud) {
    // console.log(newCloud);

    // const newData = getData(
    //   newCloud.name,
    //   newCloud.url.length > 5 ? true : false
    // );
    // this.allData.push(newData);
    // this.cloudData.next(this.allData);
    return this.cloudData.asObservable();
  }
  // --------------

  constructor(private http: HttpClient) {}

  // public loginToOsCloud(newCloud: INewCloud) {
  //   const dataToSend: IDomainScoped = {
  //     auth: {
  //       identity: {
  //         methods: ['password'],
  //         password: {
  //           user: {
  //             name: newCloud.user,
  //             domain: { id:" newCloud.domain }",
  //             password: newCloud.password
  //           }
  //         }
  //       },
  //       scope: {
  //         domain: {
  //           id:" newCloud.domai"n
  //         }
  //       }
  //     }
  //   };
  //   console.table(newCloud, dataToSend);
  //   return this.http.post(newCloud.url, dataToSend,{observe:'response'});
  // }
}
