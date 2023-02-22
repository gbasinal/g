import { trigger, state, style, transition, animate, query, stagger } from "@angular/animations";

export const defaultRevealAnimation = 
trigger('defaultRevealAnimation', [
  state('revealed', style({ opacity: 1, transform: 'translateY(0)' })),
  transition('* => revealed', [
    query('.default-animation-reveal', style({ opacity: 0, transform: 'translateY(-20px)' }), { optional: true }),
    query('.default-animation-reveal', stagger(250, [
      animate('0.5s', style({ opacity: 1, transform: 'translateY(0)' }))
    ]), { optional: true }),
  ])
]);

