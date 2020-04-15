import { PostComponent } from './post/post.component';
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




@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    InputFormatDirective,
    ContactComponent,
    SignupFormComponent,
    GroupComponent,
    PostComponent
  
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
