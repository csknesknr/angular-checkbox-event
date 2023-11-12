import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CustomcheckPipe } from './customcheck.pipe';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [AppComponent, CustomcheckPipe],
  imports: [
    BrowserModule,
    FormsModule,
    ToastrModule.forRoot({
      closeButton: true,
      progressBar: true,
      timeOut: 2000,
      progressAnimation: 'increasing',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
