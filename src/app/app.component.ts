import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  productList: any = [
    {
      productName: "Product One",
      productPrice: "22.50"
    },
    {
      productName: "Product Two",
      productPrice: "15.00"
    },
    {
      productName: "Product Three",
      productPrice: "123.82"
    }
  ];
  searchKey: any;
  productListCopy: any;
  order: number = -1;
  newProduct:any = {};

  ngOnInit() {
    this.productListCopy = this.productList;
  }

  addProduct() {
    var obj = {
      productName: this.newProduct.productName,
      productPrice: this.newProduct.productPrice
    }
    this.productList.push(obj);
  }

  editProduct(index: number) {
    this.newProduct = this.productList[index];
  }

  deleteProduct(index: number) {
    this.productList.splice(this.productList[index], 1);
  }

  sortPrice(order: number) {
    this.order = order;
    if (order === 0) {
      this.productList = this.productList.sort(function (a, b) { return a.productPrice - b.productPrice; });
    } else {
      this.productList = this.productList.sort(function (a, b) { return b.productPrice - a.productPrice; });
    }
  }

  searchValueChanged() {
    this.productList = this.productListCopy;
    var searchText = this.searchKey.toLowerCase();
    this.productList = this.productList.filter(item => JSON.stringify(item).toLowerCase().includes(searchText));
  }

}
