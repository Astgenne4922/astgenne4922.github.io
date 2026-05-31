import { Component, resource } from "@angular/core";
import { ProjectComponent } from "./project/project.component";
import { Project } from "./project/project.model";

@Component({
    selector: "app-projects",
    imports: [ProjectComponent],
    templateUrl: "./projects.component.html",
    styleUrl: "./projects.component.scss",
})
export class ProjectsComponent {
    projects = resource({
        loader: async () =>
            fetch(
                "https://raw.githubusercontent.com/Astgenne4922/astgenne4922.github.io/refs/heads/data/projects.json",
            ).then((res) => res.json() as Promise<Project[]>),
    });
}
