import { Component, OnInit, Injectable } from 'angular2/core';
import { RouteParams } from 'angular2/router';

@Component({
    //selector: 'pm-detail',
    templateUrl: 'app/products/product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
    pageTitle: string = "Page Detail";

    constructor(private _routeParams: RouteParams) {
        console.log(this._routeParams.get('id'));
        let id = +this._routeParams.get('id');
        this.pageTitle += `: ${id}`;
    }

    ngOnInit() {
        console.log("Product Detail Component");
     }
}