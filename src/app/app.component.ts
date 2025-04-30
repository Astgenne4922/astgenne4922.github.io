import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { GameOfLifeBgComponent, PATTERN_NAMES } from 'ngx-game-of-life-bg';
import { slideLeftInLeftOut } from './app.animations';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, NavbarComponent, GameOfLifeBgComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    animations: [slideLeftInLeftOut],
})
export class AppComponent {
    route = inject(ActivatedRoute);
    location = inject(Location);

    pattern = PATTERN_NAMES[Math.floor(Math.random() * PATTERN_NAMES.length)];
}
