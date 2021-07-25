import { animate, group, query, style, transition, trigger } from '@angular/animations';

function translate(direction: 'left' | 'right', amount: number) {
  const translation = direction === 'left' ? -1 * amount : amount;
  return `translate3d(${translation}vw, 0, 0)`;
}

function slideTo(direction: 'left' | 'right') {
  return [
    query(
      ':enter, :leave',
      [
        style({
          transform: translate(direction, 0),
        }),
      ],
      { optional: true }
    ),
    query(':enter', [style({ transform: translate(direction, 100) })]),
    group([
      query(
        ':leave',
        [animate('600ms ease', style({ transform: translate(direction, -100) }))],
        {
          optional: true,
        }
      ),
      query(
        ':enter',
        [animate('600ms ease', style({ transform: translate(direction, 0) }))],
        {
          optional: true,
        }
      ),
    ]),
  ];
}

export const routeAnimations = trigger('routeAnimations', [
  transition('* => isLeft', slideTo('left')),
  transition('* => isRight', slideTo('right')),
  transition('isRight => *', slideTo('left')),
  transition('isLeft => *', slideTo('right')),
]);
