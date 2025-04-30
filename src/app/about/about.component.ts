import { Component } from '@angular/core';
import { LoneDivComponent } from '../shared/lone-div/lone-div.component';
@Component({
    selector: 'app-about',
    imports: [LoneDivComponent],
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss',
})
export class AboutComponent {}
