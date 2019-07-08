import { Injectable } from '@angular/core';
import { INewCloud, IDomainScoped } from 'src/app/interfaces';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CloudOperationsService {
  constructor(private http: HttpClient) {}

  loginToOsCloud = (newCloud: INewCloud) => {
    const dataToSend: IDomainScoped = {
      auth: {
        identity: {
          methods: ['password'],
          password: {
            user: {
              name: newCloud.admin,
              domain: { id: newCloud.domain },
              password: newCloud.password
            }
          }
        },
        scope: {
          domain: {
            id: newCloud.domain
          }
        }
      }
    };
    console.table(newCloud, dataToSend);
    return this.http.post(newCloud.url, dataToSend);
  }
}
