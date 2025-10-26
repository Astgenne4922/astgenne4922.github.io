import { Component } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import * as projects_json from '../../../public/projects.json';

@Component({
    selector: 'app-projects',
    imports: [ProjectComponent],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
    projects = (projects_json as any).default;
}
