import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeancesListeComponent } from './seances/seances-liste/seances-liste.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { SeanceDetailsComponent } from './seances/seance-details/seance-details.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'seances', component: SeancesListeComponent },
    { path: 'seances/details/:id', component: SeanceDetailsComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
