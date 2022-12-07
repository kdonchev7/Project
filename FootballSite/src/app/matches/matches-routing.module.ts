import { RouterModule, Routes } from "@angular/router";
import { AllGamesComponent } from "./all-games/all-games.component";
import { NewMatchComponent } from "./new-match/new-match.component";

const routes: Routes = [
    {
        path: 'all-games',
        component: AllGamesComponent
    },
    {
        path: 'create',
        component: NewMatchComponent
    }
]

export const MatchesRoutingModule = RouterModule.forChild(routes);