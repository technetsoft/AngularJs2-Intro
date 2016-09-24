import { Component, OnInit } from 'angular2/core';
import { RouteParams, ROUTER_DIRECTIVES } from 'angular2/router';

import { IProduct } from './iproduct';
import { ProductFilterPipe } from '../filter/product-filter.pipe';
import { StarComponent } from '../Shared/star.component';
import { ProductService } from '../services/product.service';

@Component({
    //selector: 'pm-products',
    templateUrl: 'app/products/product-list.component.html',
    styleUrls: ['app/assets/css/product-list.component.css'],
    pipes: [ProductFilterPipe],
    directives: [StarComponent, ROUTER_DIRECTIVES]
})

export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = '';
    products: IProduct[];
    errorMessage: string;

    constructor(private _productService: ProductService) {}

    toggleImage(): void {
        this.showImage = !this.showImage;
    };

    ngOnInit(): void {
        console.log("In OnInit - place to initialize product service");
        this._productService.getProducts()
            .subscribe(products => this.products = products,
            error => this.errorMessage = <any> error);
    };

    onRatingClicked(message: string): void {
        this.pageTitle = "Product List: " + message;
    };
}

