import { Component, OnInit } from '@angular/core';
import { MyServiceService } from './services/my-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'pipeasyncAlbini';
arr:any=[];
  constructor(private miServicio:MyServiceService){

  }
  ngOnInit(): void {
    this.arr=this.miServicio.retornar();
  }
}
