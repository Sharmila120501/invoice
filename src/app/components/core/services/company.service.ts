import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Point } from '../../../../environments/environment.apipoint';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http:HttpClient) { }

  add(com:any){
    return this.http.post(Point.addcomp,com);
  }
  list(){
    return this.http.get(Point.viewcomp)
  }
  view(data:any){
    return this.http.get(Point.getByid+data)
  }
  update(id:any,data:any){
    return this.http.post(Point.update+'/'+id,data)
  }

  // addbank(id:any,data:any){
  //   return this.http.post(Point.addbank+'/'+id,data)
  // }
  addbank(data:any){
    return this.http.post(Point.addbank,data)
  }
  getbank(data:any){
    return this.http.get(Point.getbank+data)
  }

  getbankId(data:any){
    return this.http.get(Point.getbyIdbank+data)
  }

  updatebank(id:any,data:any){
    return this.http.post(Point.updatesbank+'/'+id,data)
  }

  ifscget(data:any){
    return this.http.get(Point.ifsc+data)
  }
}
