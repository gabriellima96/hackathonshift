import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { AppComponent } from "./app.component";

import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { ConfigFirebase } from "./configFirebase";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    AngularFireModule.initializeApp(ConfigFirebase.FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
