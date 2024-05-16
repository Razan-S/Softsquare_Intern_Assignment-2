import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DemographComponent } from './demograph/demograph.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'infor',
        component: DemographComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}