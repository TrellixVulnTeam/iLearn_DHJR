import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  {FormsModule} from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NewPostComponent } from './components/new-post/new-post.component';
import { PostsContainerComponent } from './components/posts-container/posts-container.component';
import { PostComponent } from './components/post/post.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AssignmentsComponent } from './components/assignments/assignments.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    NewPostComponent,
    PostsContainerComponent,
    PostComponent,
    LoginPageComponent,
    AssignmentsComponent,
    SidebarComponent,   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule, 
    MatSidenavModule , 
    MatIconModule,
    MatListModule,
    MatButtonModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }