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

const animationTiming = '500000ms cubic-bezier(0.4,0.0,0.2,1)';

export const animateList = trigger('animateList', [
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
