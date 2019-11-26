import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QRCodeModule } from 'angularx-qrcode';
import { InternalPageComponent } from './internal-page/internal-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatExpansionModule, MatFormFieldModule, MatProgressBarModule, MatDialogModule, MatSidenavModule, MatListModule, MatButtonModule } from '@angular/material';
import { TopbarComponent } from './internal-page/topbar/topbar.component';
import { HttpClientModule } from '@angular/common/http';
import { MstComponent } from './internal-page/mst/mst.component';
import { UpdateImageDialogComponent } from './internal-page/mst/update-image-dialog/update-image-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InternalPageComponent,
    LandingPageComponent,
    TopbarComponent,
    MstComponent,
    UpdateImageDialogComponent
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
    MatProgressBarModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ ],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    UpdateImageDialogComponent
  ],
})
export class AppModule { }
