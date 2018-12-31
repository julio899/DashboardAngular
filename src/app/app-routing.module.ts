import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';

const app_routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'profile', component: ProfileComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(app_routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {
}
