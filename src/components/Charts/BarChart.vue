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
  name: "BarChart",

  props:['chartId'],

  mounted() {


// Themes begin
    am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
    var chart = am4core.create(this.chartId, am4charts.XYChart);

// Add data
    chart.data = [{
      "year": "2015",
      "count": 5
    }, {
      "year": "2016",
      "count": 10
    }, {
      "year": "2017",
      "count": 20
    }, {
      "year": "2018",
      "count": 30
    }, {
      "year": "2019",
      "count": 4
    }, {
      "year": "2020",
      "count": 5
    }];


// Modify chart's colors
    chart.colors.list = [
      am4core.color("#046F6C"),
    ];

 // Create axes
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "year";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;

    categoryAxis.renderer.cellStartLocation = 0.2;
    categoryAxis.renderer.cellEndLocation = 0.6;

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    console.log(valueAxis)

// Create series
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = "count";
    series.dataFields.categoryX = "year";
    series.name = "Visits";
    series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
    series.columns.template.fillOpacity = 1;
    series.columns.template.column.cornerRadiusTopRight = 4;
    series.columns.template.column.cornerRadiusTopLeft = 4;

    var columnTemplate = series.columns.template;
    columnTemplate.strokeWidth = 0;
    columnTemplate.strokeOpacity = 0;

  }

}
</script>

<style scoped>

</style>
