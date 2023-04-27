import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './home/characters/characters.component';
import { CardsComponent } from './home/cards/cards.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CharactersComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    CharactersComponent,
    CardsComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule { }
