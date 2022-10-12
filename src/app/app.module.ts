import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { routerConfig } from './app.routes';
import { ProductService } from './services/product.service';
import { ProductListComponent } from './components/product-list/product-list.component'

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    [RouterModule.forRoot(routerConfig, { useHash: false })]
  ],
  providers: [
    ProductService,
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
