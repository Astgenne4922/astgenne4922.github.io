import { Component } from '@angular/core';
import { LoneDivComponent } from '../shared/lone-div/lone-div.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-projects',
    imports: [LoneDivComponent, RouterLink],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.scss',
})
export class ProjectsComponent {}
