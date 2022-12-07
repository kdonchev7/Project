import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { AllGamesComponent } from './all-games/all-games.component';
import { MatchesRoutingModule } from './matches-routing.module';
import { NewMatchComponent } from './new-match/new-match.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AllGamesComponent,
    NewMatchComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    MatchesRoutingModule,
    FormsModule
  ]
})
export class MatchesModule { }
