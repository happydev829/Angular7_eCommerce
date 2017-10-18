import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KitFullForRootModule } from '@ngx-kit/ngx-kit';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { UiModule } from './ui/ui.module';
import { cards } from './products/cards/cards';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    KitFullForRootModule,
    CoreModule,
    AppRoutingModule,
    UiModule,
  ],
  declarations: [
    AppComponent,
    ...cards,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
