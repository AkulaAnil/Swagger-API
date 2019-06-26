import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  getApi(){
    return this.http.get('http://202.65.158.172:9097/client/1/all');
  }
  postApi(create){
    return this.http.post('http://202.65.158.172:9097/client/1/all' , create);
  }

  
  getApi2(){
    return this.http.get('http://202.65.158.172:9097/1/all/4');  // slash after Change Url to - 4
  }
  postApi2(create2){
    //console.log(JSON.stringify(create2));
    return this.http.post('http://202.65.158.172:9097/1/create', create2);
  }

  // deleteApi(orgId){
  //   return this.http.delete('http://202.65.158.172:9097/client/1/all/' + orgId);
  // }

}






//  https://jsonplaceholder.typicode.com/users
