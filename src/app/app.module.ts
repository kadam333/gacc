import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CollegeinfoComponent } from './collegeinfo/collegeinfo.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { CategoryComponent } from './category/category.component';
import { CategorylistComponent } from './categorylist/categorylist.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { SubcategorylistComponent } from './subcategorylist/subcategorylist.component';
import { StudentsComponent } from './students/students.component';
import { SetexamComponent } from './setexam/setexam.component';
import { ShowexamComponent } from './showexam/showexam.component';
import { SetquestionComponent } from './setquestion/setquestion.component';
import { EditcourseComponent } from './editcourse/editcourse.component';
import { EditsubjectComponent } from './editsubject/editsubject.component';
import { EditexamComponent } from './editexam/editexam.component';
import { EditquestionComponent } from './editquestion/editquestion.component';
import { ViewquestionComponent } from './viewquestion/viewquestion.component';


const Routes:Routes =[
  {path:'',component: HomeComponent},
  {path:'collegeinfo',component:CollegeinfoComponent},
  {path:'register',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'studentlogin',component:StudentloginComponent},
  {path:'admindashboard',component:AdmindashboardComponent},
  {path:'category',component:CategoryComponent},
  {path:'categorylist',component:CategorylistComponent},
  {path:'subcategory',component:SubcategoryComponent},
  {path:'subcategorylist',component:SubcategorylistComponent},
  {path:'studentlist',component:StudentsComponent},
  {path:'setexam',component:SetexamComponent},
  {path:'showsetexam',component:ShowexamComponent},
  {path:'setquestions',component:SetquestionComponent},
  {path:'editcourse',component:EditcourseComponent},
  {path:'editsubject',component:EditsubjectComponent},
  {path:'editexam',component:EditexamComponent},
  {path:'editquestion',component:EditquestionComponent},
  {path:'viewquestion',component:ViewquestionComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CollegeinfoComponent,
    RegistrationComponent,
    LoginComponent,
    StudentloginComponent,
    AdmindashboardComponent,
    CategoryComponent,
    CategorylistComponent,
    SubcategoryComponent,
    SubcategorylistComponent,
    StudentsComponent,
    SetexamComponent,
    ShowexamComponent,
    SetquestionComponent,
    EditcourseComponent,
    EditsubjectComponent,
    EditexamComponent,
    EditquestionComponent,
    ViewquestionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Routes),ReactiveFormsModule,FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
