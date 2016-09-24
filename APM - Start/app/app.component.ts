import { Component } from 'angular2/core';
import { ProductListComponent } from './products/product-list.component';

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
    directives: [ProductListComponent]
})

export class AppComponent {
    pageTitle: string = "Angular 2 - Product Management";
    textBody: string = "Component";
}