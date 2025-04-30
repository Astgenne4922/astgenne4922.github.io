import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { GameOfLifeDemoComponent } from './demos/game-of-life-demo/game-of-life-demo.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'about', component: AboutComponent },
    { path: 'angular-game-of-life', component: GameOfLifeDemoComponent },
    { path: '**', redirectTo: 'home' },
];
