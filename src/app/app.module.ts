import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { studentReducer } from './store/reducer/student.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AuthModule,
    CoreModule,
    HttpClientModule,
    HttpModule,
    StoreModule.forRoot({ studentList: studentReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
