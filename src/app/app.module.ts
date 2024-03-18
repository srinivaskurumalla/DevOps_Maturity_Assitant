import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './layout/layout.module';
import { ConfigurationManagementComponent } from './components/feature1/configuration-management/configuration-management.component';
import { ContinuousIntegrationComponent } from './components/feature1/CI/continuous-integration.component';
import { CATComponent } from './components/feature1/cat/cat.component';
import { IACComponent } from './components/feature1/iac/iac.component';
import { CDDComponent } from './components/feature1/cdd/cdd.component';
import { CMComponent } from './components/feature1/cm/cm.component';
import { CSComponent } from './components/feature1/cs/cs.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfigurationManagementComponent,
    ContinuousIntegrationComponent,
    CATComponent,
    IACComponent,
    CDDComponent,
    CMComponent,
    CSComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
