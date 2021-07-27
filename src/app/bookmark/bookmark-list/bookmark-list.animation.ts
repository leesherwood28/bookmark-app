import {
  animate,
  AnimationTriggerMetadata,
  AUTO_STYLE,
  query,
  stagger,
  state,
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

/**
 * Fades items on leave
 */
export const fadeItemsOnLeave = trigger('fadeItemsOnLeave', [
  transition('* <=> *', [query(':leave', [animate('200ms', style({ opacity: 0 }))])]),
]);
