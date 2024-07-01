import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaygroundModule } from './playground/playground.module';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HomepageModule } from './homepage/homepage.module';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, TopNavbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PlaygroundModule,
    FormsModule,
    HomepageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
