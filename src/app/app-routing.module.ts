import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './pages/container/container.component';
import { HomeComponent } from './pages/home/home.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { ArticleDetailsComponent } from './pages/article-details/article-details.component';
import { ArticleFormComponent } from './pages/article-form/article-form.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthenticationGuard } from './services/authentication/authentication.guard';
import { SignupComponent } from './pages/signup/signup.component';
import { AccountComponent } from './pages/account/account.component';
import { LogHistoriqueComponent } from './pages/log-historique/log-historique.component';
import { TodoComponent } from './pages/todo/todo.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CovidListComponent } from './pages/covid-list/covid-list.component';
import { CovidDetailsComponent } from './pages/covid-details/covid-details.component';
import { CovidInMapComponent } from './pages/covid-in-map/covid-in-map.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'signup',
        component: SignupComponent,
      },
      {
        path: 'account',
        component: AccountComponent,
        canActivate: [AuthenticationGuard],
      },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthenticationGuard],
      },
      {
        path: 'articles',
        component: ArticlesComponent,
        canActivate: [AuthenticationGuard],
      },
      {
        path: 'articles/:id',
        component: ArticleDetailsComponent,
        canActivate: [AuthenticationGuard],
      },
      {
        path: 'new-article',
        component: ArticleFormComponent,
        canActivate: [AuthenticationGuard],
      },
      {
        path: 'edit-article/:id',
        component: ArticleFormComponent,
        canActivate: [AuthenticationGuard],
      },
      {
        path: 'logs',
        component: LogHistoriqueComponent,
        canActivate: [AuthenticationGuard],
      },
      {
        path: 'todo',
        component: TodoComponent,
        canActivate: [AuthenticationGuard],
      },
      {
        path: 'covid',
        component: CovidListComponent,
        canActivate: [AuthenticationGuard],
      },
      {
        path: 'covid/:country',
        component: CovidDetailsComponent,
        canActivate: [AuthenticationGuard],
      },
      {
        path: 'map',
        component: CovidInMapComponent,
        canActivate: [AuthenticationGuard],
      },
      {
        path: 'excel',
        loadChildren: () =>
          import('./modules/read-excel/read-excel.module').then(
            (m) => m.ReadExcelModule
          ),
      },
      {
        path: '**',
        component: NotFoundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
