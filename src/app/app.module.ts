import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponentComponent } from './menu-component/menu-component.component';
import { ComponentComponent } from './component/component.component';
import { HomeComponentComponent } from './component/home-component/home-component.component';
import { GameListComponentComponent } from './component/game-list-component/game-list-component.component';
import { GameDetailsComponentComponent } from './component/game-details-component/game-details-component.component';
import { EditGameComponentComponent } from './component/edit-game-component/edit-game-component.component';
import { AppComponentComponent } from './app-component/app-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponentComponent,
    ComponentComponent,
    HomeComponentComponent,
    GameListComponentComponent,
    GameDetailsComponentComponent,
    EditGameComponentComponent,
    AppComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
