import { Injectable } from "@angular/core";
import { Names } from "./names";
import {Observable} from "rxjs/Observable";
import { of } from 'rxjs';
import { from } from 'rxjs/observable/from';

@Injectable()
export class DatenServiceService {
  
  namesObs$: Observable<Names[]>;
  names: Names[] = [{ vn: "lisa" }, { vn: "jutta" }];

  constructor() {
    console.log("###init DatenServiceService");
  }

  getData(): string {
    console.log("### getData");
    let name = { vn: "lisa" };
    return name.vn;
  }

  getDatas(): Names[] {
    console.log("### getDatas");
    return this.names;
  }

  getDataObs(): Observable<string>[] {
    console.log("### getDataObs");
    return of(this.names);
  }
}
