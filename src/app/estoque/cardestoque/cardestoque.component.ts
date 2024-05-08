import { Component, OnInit } from '@angular/core';
import { UrlService } from '../../url-service.service';
// import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { sampleProducts } from './products';

declare var $: any;
@Component({
  selector: 'app-cardestoque',
  templateUrl: './cardestoque.component.html',
  styleUrls: ['./cardestoque.component.css'],
})
export class CardEstoqueComponent implements OnInit {
  
  // public gridView: GridDataResult;
  // public pageSize = 10;
  // public skip = 0;
  // constructor(public urlService: UrlService) { }
  //   showNotification(from, align){
  //     const type = ['','info','success','warning','danger'];

  //     const color = Math.floor((Math.random() * 4) + 1);      
  //     this.loadProducts();

  // }




  // public pageChange(event: PageChangeEvent): void {
  //     this.skip = event.skip;
  //     this.loadProducts();
  // }

  // private loadProducts(): void {
  //     this.gridView = {
  //         data: sampleProducts.slice(this.skip, this.skip + this.pageSize),
  //         total: sampleProducts.length
  //     };
  // }

  ngOnInit() {}
}
