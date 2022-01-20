import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  user:any
  getData(){
  return(this.user= [
    {name:"sahana",dept:"ise",id:101},
    {name:"arpita",dept:"ise",id:102},
    {name:"jungkook",dept:"ise",id:103},
    {name:"jimin",dept:"ise",id:104}
  ])
  }
  
  constructor() { }
}
