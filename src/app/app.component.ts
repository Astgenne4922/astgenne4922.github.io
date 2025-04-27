import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { GameOfLifeBgComponent, PATTERN_NAMES } from 'ngx-game-of-life-bg';
import { slideLeftInLeftOut } from './app.animations';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, NavbarComponent, GameOfLifeBgComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    animations: [slideLeftInLeftOut],
})
export class AppComponent {
    pattern = PATTERN_NAMES[Math.floor(Math.random() * PATTERN_NAMES.length)];

    constructor(protected route: ActivatedRoute) {}
}
