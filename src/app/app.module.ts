import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './components/table/table.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
const appRoutes: Routes = [
  { path: '', component: TableComponent },
  { path: 'users/info/:id', component: UserInfoComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
