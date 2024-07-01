import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaygroundModule } from './playground/playground.module';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, HomepageComponent],
  imports: [BrowserModule, AppRoutingModule, PlaygroundModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
