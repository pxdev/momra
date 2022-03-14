<template>
  <div>
    <div :id="chartId" class="charts"></div>
  </div>
</template>

<script>
/* Imports */
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.options.commercialLicense = true;

export default {
  name: "XyChart",

  props:['chartId'],

  mounted() {


// Themes begin
    am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
    var chart = am4core.create(this.chartId, am4charts.XYChart);

// Add data
    chart.data = [{
      "date": new Date(2018, 0, 1),
      "value": 450,
      "value2": 362,
      "value3": 699
    }, {
      "date": new Date(2018, 0, 2),
      "value": 269,
      "value2": 450,
      "value3": 841
    }, {
      "date": new Date(2018, 0, 3),
      "value": 700,
      "value2": 358,
      "value3": 699
    }, {
      "date": new Date(2018, 0, 4),
      "value": 490,
      "value2": 367,
      "value3": 500
    }, {
      "date": new Date(2018, 0, 5),
      "value": 500,
      "value2": 485,
      "value3": 369
    }, {
      "date": new Date(2018, 0, 6),
      "value": 550,
      "value2": 354,
      "value3": 250
    }, {
      "date": new Date(2018, 0, 7),
      "value": 420,
      "value2": 350,
      "value3": 600
    }];

// Create axes
    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;
    dateAxis.renderer.minGridDistance = 30;

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    console.log(valueAxis)
// Create series
    function createSeries(field, name, zindex) {
      var series = chart.series.push(new am4charts.LineSeries());
      series.dataFields.valueY = field;
      series.dataFields.dateX = "date";
      series.name = name;
      series.tooltipText = "{dateX}: [b]{valueY}[/]";
      series.strokeWidth = 2;
      series.zIndex = zindex;

      var bullet = series.bullets.push(new am4charts.CircleBullet());
      bullet.circle.stroke = am4core.color("#fff");
      bullet.circle.strokeWidth = 2;

      series.events.once("ready", function(ev) {
        chart.legend.children.moveValue(ev.target.legendDataItem.itemContainer, ev.target.zIndex);
      });

      return series;
    }

    createSeries("value", "Series #1", 1);
    createSeries("value2", "Series #2", 2);
    createSeries("value3", "Series #3", 0);

    chart.legend = new am4charts.Legend();
    chart.cursor = new am4charts.XYCursor();

}
}
</script>

<style scoped>

</style>
