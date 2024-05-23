import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Point } from '../../../../environments/environment.apipoint';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(private http:HttpClient) { }

  add(vend:any){
    return this.http.post(Point.addvendor,vend);
  }
  view(data:any){
    return this.http.get(Point.getbyid+data)
  }

  update(id:any, data:any){
    return this.http.post(Point.updates+'/'+id,data)
  }
  //getbyid
  getid(data:any){
    return this.http.get(Point.vendorview+data)
  }
}
