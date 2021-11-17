import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './dashboard/page-not-found/page-not-found.component';
const routes: Routes = [
{path:'',redirectTo:'sign-in',pathMatch:'full'},
{path:'',loadChildren:()=>import('./auth/auth.module').then(module=>module.AuthModule)},
{path:'',loadChildren:()=>import('./shared/shared.module').then(module=>module.SharedModule)},
{path:'',loadChildren:()=>import('./cms/cms.module').then(module=>module.CmsModule)},
{path:'',loadChildren:()=>import('./dashboard/dashboard.module').then(module=>module.DashboardModule)},
{path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
