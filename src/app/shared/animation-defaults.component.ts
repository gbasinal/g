import { trigger, state, style, transition, animate, query, stagger } from "@angular/animations";


export const defaultRevealAnimation = 
trigger('defaultRevealAnimation', [
  state('default', style({ opacity: 0, transform: 'translateY(-25px)'})),
  state('revealed', style({ opacity: 1, transform: 'translateY(0)' })),
  transition('* => revealed', [
    query('.default-animation-reveal', style({ opacity: 0, transform: 'translateY(-25px)' }), { optional: true }),
    query('.default-animation-reveal', stagger('100ms', [
      animate('400ms ease-in', style({ opacity: 1, transform: 'translateY(0)' }))
    ]), { optional: true }),
  ])
]);

export const spanAnimationForProject = trigger('spanProject', [
  state('front', style({ transform: 'none' })),
  state('spannedProject', style({ width : '100%' })),
  transition('front <=> spannedProject', animate('70ms ease-out'))
]);

export const spanAnimationForPlayGround = trigger('spanPlayground', [
  state('front', style({ transform: 'none' })),
  state('spannedPlayground', style({ width : '100%' })),
  transition('front <=> spannedPlayground', animate('70ms ease-out')),
]);

export const childDefaultRevealAnimation = 
trigger('childDefaultRevealAnimation', [
  state('default', style({ opacity: 0, transform: 'translateY(-25px)'})),
  state('revealed', style({ opacity: 1, transform: 'translateY(0)' })),
  transition('default <=> revealed', animate('100ms ease-in', style({ opacity: 1, transform: 'translateY(0)' }))),
]);
