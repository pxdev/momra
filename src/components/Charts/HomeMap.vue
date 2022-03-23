<template>
  <div>
    <div :id="chartId" class="charts"></div>
    <h1 class="pd-15 tx-30">{{activeRegionIndex}}</h1>

  </div>
</template>

<script>
/* Imports */
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_region_saudiArabia_onLow from "@amcharts/amcharts4-geodata/saudiArabiaLow";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import regions from "@/json/regions.json";

am4core.options.commercialLicense = true;

export default {
  name: "HomeMap",

  props: ['chartId'],

  data(){
    return{
      regions : regions
    }
  },

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
    polygonSeries.data = this.regions


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
     // this.exploreRegion(data);
      this.setActiveRegionID(data.id)
      console.log(data)
    });



  },
  methods: {

    setActiveRegionID(data){
      this.$store.state.activeRegionId = data;
      this.$store.state.sectorCounter = null;
      this.$router.push("/explore");
      console.log(this.$store.state.activeRegionId)
    },

    exploreRegion(data) {
      this.$store.state.activeRegion = data.title;
      this.$store.state.activeRegionObj = data;
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
    },

    activeRegionIndex() {
      return this.$store.state.activeRegionIndex;
    },

  },

}
</script>

<style scoped>
.charts {
  height: 300px;
}
</style>
