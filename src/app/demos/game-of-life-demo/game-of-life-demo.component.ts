import { Component, signal } from '@angular/core';
import { LoneDivComponent } from '../../shared/lone-div/lone-div.component';
import { FormsModule } from '@angular/forms';
import { GameOfLifeBgComponent, PATTERN_NAMES } from 'ngx-game-of-life-bg';

@Component({
    selector: 'app-game-of-life-demo',
    templateUrl: './game-of-life-demo.component.html',
    styleUrls: ['./game-of-life-demo.component.scss'],
    imports: [GameOfLifeBgComponent, LoneDivComponent, FormsModule],
})
export class GameOfLifeDemoComponent {
    readonly PATTERNS = PATTERN_NAMES;

    showGrid = signal<boolean>(false);
    gridColor = signal<string>('#f8f6e7');
    backgroundColor = signal('#000000');
    cellSize = signal<number | undefined>(undefined);
    cellColor = signal<string>('#f8f6e7');
    fps = signal<number | undefined>(undefined);
    isToroidal = signal<boolean | undefined>(undefined);
    spawnRate = signal<number>(0.3);
    advanceGame = signal<boolean>(true);
    preset = signal<string>(
        PATTERN_NAMES[Math.floor(Math.random() * PATTERN_NAMES.length)]
    );

    fpsUp(golFps: number) {
        this.fps.update((v) => {
            if (v === undefined) v = golFps;
            return v + 5 > 60 ? 60 : v + 5;
        });
    }
    fpsDown(golFps: number) {
        this.fps.update((v) => {
            if (v === undefined) v = golFps;
            return v - 5 < 5 ? 5 : v - 5;
        });
    }

    sizeUp(golSize: number) {
        this.cellSize.update((v) => {
            if (v === undefined) v = golSize;
            return v + 5 > 50 ? 50 : v + 5;
        });
    }
    sizeDown(golSize: number) {
        this.fps.update((v) => {
            if (v === undefined) v = golSize;
            return v - 5 < 5 ? 5 : v - 5;
        });
    }

    changePattern(name?: string) {
        this.preset.set(
            name ??
                PATTERN_NAMES[Math.floor(Math.random() * PATTERN_NAMES.length)]
        );

        this.fps.set(undefined);
        this.cellSize.set(undefined);
        this.isToroidal.set(undefined);
    }
}
