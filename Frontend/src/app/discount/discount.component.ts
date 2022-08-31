import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Discount } from '../discounts';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css']
})
export class DiscountComponent implements OnInit {

  userdiscount: Array<Discount> = [];
  public discount:any
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    

    this.api.getDiscount()
    .subscribe(res => {
      this.discount = res;

    });}

}
