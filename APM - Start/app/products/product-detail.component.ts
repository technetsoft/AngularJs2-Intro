import { Component, OnInit } from 'angular2/core';

@Component({
    //selector: 'pm-detail',
    templateUrl: 'app/products/product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
    pageTitle: string = "Page Detail";

    constructor() { }

    ngOnInit() {
        console.log("Product Detail Component");
     }
}