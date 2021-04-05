import { NgModule } from '@angular/core';
import { CardComponent } from './card.component';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../../../material.module';

@NgModule({
    declarations: [  CardComponent ],
    exports: [ CardComponent ],
    imports: [ CommonModule, MaterialModule ]
})
export class CardModule { }
