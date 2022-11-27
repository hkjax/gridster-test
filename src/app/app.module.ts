import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HighchartsChartModule } from "highcharts-angular";
import { ChartComponent } from "./chart.component";
import { GridsterModule } from "angular-gridster2";
import { DashGridsterConfigService } from "./dash-gridster-config.service";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent, ChartComponent],
  imports: [BrowserModule, HighchartsChartModule, GridsterModule],
  providers: [DashGridsterConfigService],
  bootstrap: [AppComponent]
})
export class AppModule {}
