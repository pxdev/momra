<template>
  <div class="charts bar-chart" ref="chartdiv"></div>
</template>

<script>
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';

export default {
  name: "BarChart",
  mounted() {
    let root = am5.Root.new(this.$refs.chartdiv);


    let chart = root.container.children.push(
        am5xy.XYChart.new(root, {
          panY: false,
          layout: root.verticalLayout
        })
    );

    // Define data
    let data = [{
      category: "2015",
      value1: 10,
      value2: 58
    },
      {
        category: "2017",
        value1: 12,
        value2: 180
      }, {
        category: "2019",
        value1: 85,
        value2: 120
      }
    ];

    // Create Y-axis
    let yAxis = chart.yAxes.push(
        am5xy.ValueAxis.new(root, {
          renderer: am5xy.AxisRendererY.new(root, {})
        })
    );

    // Create X-Axis
    let xAxis = chart.xAxes.push(
        am5xy.CategoryAxis.new(root, {
          renderer: am5xy.AxisRendererX.new(root, {}),
          categoryField: "category"
        })
    );
    xAxis.data.setAll(data);

    // Create series
    let series1 = chart.series.push(
        am5xy.ColumnSeries.new(root, {
          name: "Series",
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: "value1",
          categoryXField: "category"
        })
    );
    series1.data.setAll(data);

    let series2 = chart.series.push(
        am5xy.ColumnSeries.new(root, {
          name: "Series",
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: "value2",
          categoryXField: "category"
        })
    );
    series2.data.setAll(data);


    // Add cursor
    chart.set("cursor", am5xy.XYCursor.new(root, {}));

    this.root = root;
  },

  beforeDestroy() {
    if (this.root) {
      this.root.dispose();
    }
  }

}
</script>

<style scoped>
.bar-chart {
  width: 100%;
  height: 300px;
}
</style>