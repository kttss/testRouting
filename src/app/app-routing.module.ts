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

const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'account', component: AccountComponent },
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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
