import { TYPED_NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
// import { resourceLimits } from 'worker_threads';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
name:string
item:string="TY" 
nam:string
item2:any=""
item3:any="dev"
item4:number
val:any
// const arr = ["dev","tes","hr"];

// const random = Math.floor(Math.random() * arr.length);


fun()
   {
     this.item2+=this.item
     for(let i=0;i<3;i++)
    {
     this.item2+= this.name[i].toUpperCase()
    }
    // for(let j=0;j<array.length;j++)
    // {
      this.item3=
    // }
     this.item4=Math.floor(Math.random())*899+100
     this.item2+=this.item3;
     this.item2+=this.item4
   }
  
   
  //  val:any
// func(){
//   this.val+=this.item+this.item2+this.item3+this.item4
// }

}
