import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AssetsComponent } from './assets/assets.component';
import { VideosComponent } from './assets/videos/videos.component';
import { QuizComponent } from './assets/quiz/quiz.component';
import { BlogComponent } from './blog/blog.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FooterComponent } from './footer/footer.component';
import { StudentcornerComponent } from './studentcorner/studentcorner.component';
import { LecturesComponent } from './studentcorner/lectures/lectures.component';
import { McqsComponent } from './studentcorner/mcqs/mcqs.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    AssetsComponent,
    VideosComponent,
    QuizComponent,
    BlogComponent,
    ContactusComponent,
    PagenotfoundComponent,
    FooterComponent,
    StudentcornerComponent,
    LecturesComponent,
    McqsComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
