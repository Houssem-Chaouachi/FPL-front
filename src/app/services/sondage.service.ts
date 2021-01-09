import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class SondageService {

  constructor(private webreq:WebRequestService) { }

  addSujet( data){
return this.webreq.post(`sondage/create`,data)
  }
  getAllSondage(){
    return this.webreq.get('sondage')
  }
  getSondageById(id){
    return this.webreq.get(`sondage/${id}`)
  }
  vote(id,data){
    return this.webreq.put(`sondage/vote/${id}`,data)
  }
}
