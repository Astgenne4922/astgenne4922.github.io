import { Component } from '@angular/core';
import { LoneDivComponent } from '../shared/lone-div/lone-div.component';

@Component({
    selector: 'app-home',
    imports: [LoneDivComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
})
export class HomeComponent {}
