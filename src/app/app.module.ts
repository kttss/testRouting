import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './pages/container/container.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { ArticleDetailsComponent } from './pages/article-details/article-details.component';
import { ArticleComponent } from './components/article/article.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FakeData } from './services/fake-api/fake-data';
import {
  HttpClientModule,
  HTTP_INTERCEPTORS,
  HttpClient,
} from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ArticleFormComponent } from './pages/article-form/article-form.component';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { DeleteModalComponent } from './components/delete-modal/delete-modal.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { LoginComponent } from './pages/login/login.component';
import { JwtModule } from '@auth0/angular-jwt';
import { SignupComponent } from './pages/signup/signup.component';
import { AccountComponent } from './pages/account/account.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { LogHistoriqueComponent } from './pages/log-historique/log-historique.component';
import { LogsInterceptor } from './services/interceptor/logs.interceptor';
import { TodoComponent } from './pages/todo/todo.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TodoModalComponent } from './components/todo-modal/todo-modal.component';
import { MaterialModule } from './shared/material/material.module';

import { ColorPickerModule } from 'ngx-color-picker';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CovidListComponent } from './pages/covid-list/covid-list.component';
import { CovidDetailsComponent } from './pages/covid-details/covid-details.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CovidInMapComponent } from './pages/covid-in-map/covid-in-map.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MinimiseTextPipe } from './pipes/minimise-text.pipe';

export function TranslationLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NavbarComponent,
    HomeComponent,
    ArticlesComponent,
    ArticleDetailsComponent,
    ArticleComponent,
    ArticleFormComponent,
    FormFieldComponent,
    DeleteModalComponent,
    LoginComponent,
    SignupComponent,
    AccountComponent,
    LogHistoriqueComponent,
    TodoComponent,
    TodoModalComponent,
    NotFoundComponent,
    CovidListComponent,
    CovidDetailsComponent,
    CovidInMapComponent,
    MinimiseTextPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(FakeData, {
      passThruUnknownUrl: true,
    }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    CKEditorModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('token');
        },
      },
    }),
    LeafletModule,

    MaterialModule,
    ColorPickerModule,
    NgxChartsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: TranslationLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LogsInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
