import { Component, OnInit } from '@angular/core';
import { DatenServiceService } from '../service/daten-service.service';
import { Names } from "../service/names";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  
  test: string = "Markus"
  names: Names = []

  constructor(private datenServiceService: DatenServiceService) { 
    let data = datenServiceService.getData()
    console.log("--constructor->"+data);
    this.test = data;
  }

  ngOnInit() {
    this.test = "kix";
    let data = this.datenServiceService.getData()
    console.log("--ngOnInit->"+data);
    this.test = data;

    let names: Names[] = this.datenServiceService.getDatas()
    console.log("--names->"+names[1].vn);
    this.names = names;

  }

}