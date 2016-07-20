import {Component} from 'angular2/core';
import {NavbarComponent} from './components/navbar.component';
import {DrumsComponent} from './components/drums.component';

@Component({
    selector: 'my-app',
    template: `
        <navbar></navbar>
        <drums></drums>
    `,
    directives:[NavbarComponent,DrumsComponent]
})
export class AppComponent { }