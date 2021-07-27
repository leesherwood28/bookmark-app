import {
  animate,
  AUTO_STYLE,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';

/**
 * Fades items on enter
 */
export const fadeItemsOnEnter = trigger('fadeItemsOnEnter', [
  transition('* <=> *', [
    query(
      ':enter',
      [
        style({ opacity: 0 }),
        stagger('50ms', animate('600ms ease-out', style({ opacity: AUTO_STYLE }))),
      ],
      { optional: true }
    ),
  ]),
]);
