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
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ArticleFormComponent } from './pages/article-form/article-form.component';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { DeleteModalComponent } from './components/delete-modal/delete-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(FakeData),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
