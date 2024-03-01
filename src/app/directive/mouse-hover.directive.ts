import { Directive } from '@angular/core';
import { ItalicsFontDirective } from './italics-font.directive';
import { FontColorDirective } from './font-color.directive';

@Directive({
  selector: '[appMouseHover]',
  standalone: true,
  hostDirectives: [
    {
      directive: ItalicsFontDirective,
      outputs: ['hover']
    },
    {
      directive: FontColorDirective,
      inputs: ['color: colorChange']
    }
  ]
})
export class MouseHoverDirective {

  constructor() { }

}
