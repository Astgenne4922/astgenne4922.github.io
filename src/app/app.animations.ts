import {
    animate,
    group,
    query,
    style,
    transition,
    trigger,
} from '@angular/animations';

export const slideLeftInLeftOut = trigger('slideLeftInLeftOut', [
    transition('* => *', [
        query(
            ':enter, :leave',
            [
                style({
                    position: 'absolute',
                }),
            ],
            { optional: true }
        ),
        query(':enter', [style({ translate: '-100%' })], {
            optional: true,
        }),
        group([
            query(
                ':leave',
                [animate('0.5s ease', style({ translate: '-100%' }))],
                {
                    optional: true,
                }
            ),
            query(
                ':enter',
                [animate('0.5s ease', style({ translate: '0%' }))],
                {
                    optional: true,
                }
            ),
        ]),
    ]),
]);
