import { NgModule } from '@angular/core';
import { BoardComponent } from './board.component';
import { CommonModule } from '@angular/common';
import { CardModule } from 'src/app/shared/components/ard/card.module';

@NgModule({
    declarations: [ BoardComponent ],
    exports: [ BoardComponent ],
    imports: [
        CommonModule,
        CardModule
    ]
})
export class BoardModule { }
