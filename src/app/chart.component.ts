import { Component, OnInit } from "@angular/core";
import { DashGridsterConfigService } from "./dash-gridster-config.service";
import { GridsterConfig } from "angular-gridster2";
import * as Highcharts from "highcharts";
import * as HighchartsMore from "highcharts/highcharts-more";
import * as HighchartsExporting from "highcharts/modules/exporting";

HighchartsMore(Highcharts);
HighchartsExporting(Highcharts);

@Component({
  selector: "app-chart",
  templateUrl: "./chart.component.html"
})
export class ChartComponent implements OnInit {
  title = "app";
  chart;
  updateFromInput = false;
  Highcharts = Highcharts;
  chartConstructor = "chart";
  chartCallback;
  chartOptions = {
    series: [
      {
        data: [1, 2, 3, 6, 9]
      }
    ],
    exporting: {
      enabled: true
    },
    yAxis: {
      allowDecimals: false,
      title: {
        text: "Data"
      }
    }
  };

  constructor(private dashGridsterConfigService: DashGridsterConfigService) {
    const self = this;

    this.chartCallback = chart => {
      self.chart = chart;
      //self.chart.reflow();
    };
  }
  // @ViewChildren(GridsterItemComponent) componentArray: QueryList<
  //   GridsterItemComponent
  // >;
  get options(): GridsterConfig {
    return this.dashGridsterConfigService.options;
  }

  get items(): GridsterConfig {
    return this.dashGridsterConfigService.items;
  }
  ngOnInit() {
    //this.dashGridsterConfigService.chartReflow(this.chart);
  }

  update_chart() {
    const self = this,
      chart = this.chart;

    chart.showLoading();
    setTimeout(() => {
      chart.hideLoading();

      self.chartOptions.series = [
        {
          data: [10, 25, 15]
        }
      ];

      self.updateFromInput = true;
    }, 2000);
  }
}
