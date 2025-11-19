import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedButtonComponent } from './components/shared-button/shared-button.component';
import { TruncatePipe } from './pipes/truncate.pipe';

@NgModule({
  declarations: [SharedButtonComponent, TruncatePipe],
  imports: [CommonModule],
  exports: [SharedButtonComponent, TruncatePipe]
})
export class SharedModule {}
