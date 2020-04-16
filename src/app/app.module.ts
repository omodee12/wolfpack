import { PostService } from './services/post.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './favourite/page/page.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactComponent } from './contact/contact.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { GroupComponent } from './group/group.component';
import { PostsComponent } from './posts/posts.component';




@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    InputFormatDirective,
    ContactComponent,
    SignupFormComponent,
    GroupComponent,
    PostsComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule, 
    FormsModule,
    HttpModule,
    ReactiveFormsModule
    
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
