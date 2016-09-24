import { Component } from 'angular2/core';
import { ProductListComponent } from './products/product-list.component';
import { ProductService } from './services/product.service';

@Component({
    selector: 'pm-app',
    template: `
    <div>
        <h1>
            {{pageTitle}} - {{textBody}}
        </h1>
        <div>
            <pm-products></pm-products>
        </div>
    </div>
    `,
    directives: [ProductListComponent],
    providers: [ProductService]
})

export class AppComponent {
    pageTitle: string = "Angular 2 - Product Management";
    textBody: string = "Component";
}