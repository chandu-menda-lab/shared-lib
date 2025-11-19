import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'shared-button',
  templateUrl: './shared-button.component.html',
  styleUrls: ['./shared-button.component.scss']
})
export class SharedButtonComponent {
  @Input() label = 'Click';
  @Input() disabled = false;
  @Output() pressed = new EventEmitter<void>();

  onClick() {
    if (!this.disabled) this.pressed.emit();
  }
}
