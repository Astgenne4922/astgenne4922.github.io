import { Component, computed, input } from '@angular/core';
import { LoneDivComponent } from '../../shared/lone-div/lone-div.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-project',
    imports: [LoneDivComponent, RouterLink],
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.scss'],
})
export class ProjectComponent {
    project = input.required<{
        title: string;
        body: string;
        buttons: {
            link: string;
            is_route: boolean;
            badge: string;
            alt: string;
        }[];
    }>();
    title = computed(() => this.project().title);
    body = computed(() => this.project().body);
    buttons = computed(() => this.project().buttons);
}
