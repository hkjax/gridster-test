import { Injectable } from "@angular/core";
import { CompactType, GridsterConfig } from "angular-gridster2";

@Injectable()
export class DashGridsterConfigService {
  public items: any = [
    {
      cols: 1,
      rows: 1,
      y: 0,
      x: 0,
      id: "111"
    },
    {
      cols: 2,
      rows: 2,
      y: 1,
      x: 1,
      id: "222"
    }
  ];
  public options: GridsterConfig = {
    draggable: {
      enabled: true
    },
    pushItems: true,
    floating: true,
    direction: "horizontal",
    resizable: {
      enabled: true
    },
    compactType: CompactType.CompactUp,
    margins: 10,
    columns: 4,
    minCols: 4,
    maxCols: 4,
    minRows: 4,
    maxRows: 4,
    gridType: "fixed",
    pushDirections: {
      north: false,
      east: true,
      west: false,
      south: true
    },
    displayGrid: "none"
  };
}
