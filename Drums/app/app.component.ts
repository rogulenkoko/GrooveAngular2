import {Component} from 'angular2/core';
import {NavbarComponent} from './components/navbar.component';
import {DrumsComponent} from './components/drums.component';
import {FooterComponent} from './components/footer.component';

@Component({
    selector: 'my-app',
    template: `
        <navbar></navbar>
        <drums></drums>
        <foot></foot>
    `,
    directives:[NavbarComponent,DrumsComponent,FooterComponent]
})
export class AppComponent { }