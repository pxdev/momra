<template>
  <div>
    <div :id="chartId" class="charts"></div>
   </div>
</template>

<script>
/* Imports */
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
//import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import am4geodata_region_saudiArabia_onLow from "@amcharts/amcharts4-geodata/saudiArabiaLow";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.options.commercialLicense = true;

export default {
  name: "HomeMap",

  props: ['chartId'],

  mounted() {
    am4core.useTheme(am4themes_animated);

    // Create map instance
    var chart = am4core.create(this.chartId, am4maps.MapChart);
    chart.chartContainer.wheelable = false;
    chart.seriesContainer.draggable = false;
// Set map definition
    chart.geodata = am4geodata_region_saudiArabia_onLow;

// Set projection
    chart.projection = new am4maps.projections.Miller();

// Create map polygon series
    var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

//Set min/max fill color for each area
    polygonSeries.heatRules.push({
      property: "fill",
      target: polygonSeries.mapPolygons.template,
    });

// Make map load polygon data (state shapes and names) from GeoJSON
    polygonSeries.useGeodata = true;



    // Set heatmap values for each state
    polygonSeries.data = [
      {
        id: "SA-01",
        value: 4447100,
        title: "الرياض"
      },
      {
        id: "SA-02",
        value: 626932,
        title: "مكة المكرمة"
      },
      {
        id: "SA-03",
        value: 5130632,
        title: "المدينة المنورة"
      },
      {
        id: "SA-04",
        value: 2673400,
        title: "الشرقية"
      },
      {
        id: "SA-05",
        value: 5130632,
        title: "القصيم"
      },
      {
        id: "SA-06",
        value: 4301261,
        title: "حائل"
      },
      {
        id: "SA-07",
        value: 3405565,
        title: "تبوك"
      },
      {
        id: "SA-08",
        value: 783600,
        title: "الحدود الشمالية"
      },
      {
        id: "SA-09",
        value: 15982378,
        title: "جازان"
      },
      {
        id: "SA-10",
        value: 8186453,
        title: "نجران"
      },
      {
        id: "SA-11",
        value: 1211537,
        title: "الباحة"
      },
      {
        id: "SA-12",
        value: 1293953,
        title: "الجوف"
      },

      {
        id: "SA-14",
        value: 6080485,
        title: "عسير"
      }
    ];





// Configure series tooltip
    var polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = " منطقة {title}";
    // polygonTemplate.nonScalingStroke = true;
    polygonTemplate.strokeWidth = 1;
    polygonTemplate.stroke = am4core.color("#fff")
    polygonTemplate.strokeDasharray = 5;

    polygonTemplate.fill = am4core.color("#fff");
    polygonTemplate.fillOpacity = 0.05;


// Create hover state and set alternative fill color
    var hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color("#046F6C");
    hs.properties.fillOpacity = 0.6;

// Create Click state

    polygonTemplate.events.on("hit", (ev) => {
      var data = ev.target.dataItem.dataContext;
      console.log(data)
      this.exploreRegion(data.title)
    });



  },
  methods: {
    exploreRegion(region) {
      this.$store.state.activeRegion = region;
      this.$store.state.sectorCounter = null;
      this.$router.push("/explore");
    }
  },
  computed:{
    sectorCounter(){
      return this.$store.state.sectorCounter;
    },
    activeRegion(){
      return this.$store.state.activeRegion;

    }
  },

}
</script>

<style scoped>
.charts {
  height: 300px;
}
</style>
