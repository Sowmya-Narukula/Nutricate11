import { AbsoluteSourceSpan } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutusComponent } from './aboutus/aboutus.component';
import { AssetsComponent } from './assets/assets.component';
import { QuizComponent } from './assets/quiz/quiz.component';
import { VideosComponent } from './assets/videos/videos.component';
import { BlogComponent } from './blog/blog.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SignupComponent } from './signup/signup.component';
import { LecturesComponent } from './studentcorner/lectures/lectures.component';
import { McqsComponent } from './studentcorner/mcqs/mcqs.component';
import { StudentcornerComponent } from './studentcorner/studentcorner.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'aboutus',component:AboutusComponent},
  // {path:'assets',component:AssetsComponent,children:[{path:'videos',component:VideosComponent},
  // {path:'quiz',component:QuizComponent}]},
  {path:'studentcorner',component:StudentcornerComponent,children:[{path:'lectures',component:LecturesComponent},
{path:'mcqs',component:McqsComponent}]},
  {path:'blog',component:BlogComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},

  {path:'',redirectTo:'home',pathMatch:'full'},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
