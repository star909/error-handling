import { Component, OnInit } from '@angular/core';
import {HandlingApiService} from '../../services/handling-api.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-error-handling',
  templateUrl: './error-handling.component.html',
  styleUrls: ['./error-handling.component.css']
})
export class ErrorHandlingComponent implements OnInit {
apiData:Array<object> = [];
  constructor(private api:HandlingApiService,private spinner:NgxSpinnerService) { }

  ngOnInit(): void {
    this.getApiFinalData()
  }
  /**
   * @ function : getApiFinalData()
   * @ Purpose  : Subscribing to get the grid data
   * @ version  : 1.0.1
   * @ author   : Shivam
   */
  private getApiFinalData() :void{
    try{
      this.spinner.show();
  this.api.getAPIData().subscribe(res=>{
    this.spinner.hide();
    this.apiData.push(res)
  })
  }catch(ex){
    console.log(ex);
  }
  }
}
