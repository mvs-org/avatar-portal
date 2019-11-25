import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QRCodeModule } from 'angularx-qrcode';
import { InternalPageComponent } from './internal-page/internal-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatExpansionModule, MatFormFieldModule, MatSidenavModule, MatListModule, MatButtonModule } from '@angular/material';
import { TopbarComponent } from './internal-page/topbar/topbar.component';
import { UploadImageComponent } from './internal-page/upload-image/upload-image.component';
import { HttpClientModule } from '@angular/common/http';
import { MstComponent } from './internal-page/mst/mst.component';

@NgModule({
  declarations: [
    AppComponent,
    InternalPageComponent,
    LandingPageComponent,
    TopbarComponent,
    UploadImageComponent,
    MstComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QRCodeModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatExpansionModule,
    MatFormFieldModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
