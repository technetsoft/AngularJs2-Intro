import { Component, OnInit } from 'angular2/core';
import { Router, RouteParams } from 'angular2/router';

@Component({
    //selector: 'pm-detail',
    templateUrl: 'app/products/product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
    pageTitle: string = "Page Detail";

    constructor(private _routeParams: RouteParams, private _router: Router) {
        console.log(this._routeParams.get('id'));
        let id = +this._routeParams.get('id');
        this.pageTitle += `: ${id}`;
    }

    ngOnInit() {
        console.log("Product Detail Component");
    }

    onBack(): void {
        this._router.navigate(['Products']);
    }
}