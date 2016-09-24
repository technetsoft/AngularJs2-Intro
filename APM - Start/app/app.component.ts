import { Component } from 'angular2/core';

@Component({
    selector: 'pm-app',
    template: `
    <div>
        <h1>
            {{pageTitle}}
        </h1>
        <div>
            {{textBody}}
        </div>
    </div>
    `
})

export class AppComponent {
    pageTitle: string = "Angular 2 - Product Management";
    textBody: string = "Component";
}