import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';

const declarations = [CardComponent];
const imports = [CommonModule];
const exports = [CardComponent];

@NgModule({
  declarations: declarations,
  imports: imports,
  exports: exports,
})
export class SharedModule {}
