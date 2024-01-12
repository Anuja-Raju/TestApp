import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient : HttpClient){ }

     UrlAddress:string=environment.API_URL;

     Signup(data:any){
      return this.httpClient.post<any>(this.UrlAddress+'/signup', data);
     }

    login(data: any){
      return this.httpClient.post<any>(this.UrlAddress+'/login',data)
    }
      // CreateUpdateApplicationMaster(data:any){
      //   return this.httpClient.post<any>(this.UrlAddress+'Inventory/CreateUpdateApplicationMaster', data);
      // }
      
      // GetAllApplicationMaster(){
      //   return this.httpClient.get<any>(this.UrlAddress+'Inventory/GetAllApplicationMaster');
      // }


}
