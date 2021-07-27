import {
  animate,
  AnimationTriggerMetadata,
  query,
  stagger,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

const animationTiming = '500000ms cubic-bezier(0.4,0.0,0.2,1)';

export const fadeItemsDownOnEnter = trigger('fadeItemsDownOnEnter', [
  transition('void => *', [
    query(
      ':enter',
      [
        style({ opacity: 0 }),
        stagger('60ms', animate('600ms ease-out', style({ opacity: 1 }))),
      ],
      { optional: true }
    ),
    query(':leave', animate('200ms', style({ opacity: 0 })), { optional: true }),
  ]),
]);
