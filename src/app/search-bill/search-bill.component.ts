import { Component, OnInit } from '@angular/core';
import { BillHtppService } from '../services/bill-htpp.service';
import { Bill } from '../models/bill.model';

@Component({
  selector: 'app-search-bill',
  templateUrl: './search-bill.component.html',
  styleUrls: ['./search-bill.component.css']
})
export class SearchBillComponent implements OnInit {

  constructor(private billHtppService:BillHtppService) { }
  searchStatus:string;
  bill:Bill;

  ngOnInit(): void {
    this.searchStatus=undefined;
    this.bill=undefined;
  }
  searchBill(billNo:number){
    this.billHtppService.search(billNo).subscribe(bill=>{
      if(bill!=null)
      {
        this.bill=bill;
        this.searchStatus='FOUND';
        //console.log(this.bill);
        
      }    
      else{
        this.searchStatus='NOTFOUND';
      }
    });
  }
  printBill(){
    window.print();
  }

}
