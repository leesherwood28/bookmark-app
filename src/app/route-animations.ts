import { animate, group, query, style, transition, trigger } from '@angular/animations';

function slideTo(direction: 'left' | 'right') {
  return [
    query('*', style({ position: 'absolute' })),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: '0',
          [direction]: 0,
          width: '100%',
        }),
      ],
      { optional: true }
    ),
    query(':enter', [style({ [direction]: '-100%' })]),
    group([
      query(':leave', [animate('600ms ease', style({ [direction]: '100%' }))], {
        optional: true,
      }),
      query(':enter', [animate('600ms ease', style({ [direction]: '0%' }))], {
        optional: true,
      }),
    ]),
  ];
}

export const routeAnimations = trigger('routeAnimations', [
  transition('* => isLeft', slideTo('left')),
  transition('* => isRight', slideTo('right')),
  transition('isRight => *', slideTo('left')),
  transition('isLeft => *', slideTo('right')),
]);
