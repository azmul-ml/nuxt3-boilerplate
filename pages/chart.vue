<script setup>
import BubbleChart from "../utils/Charts/BubbleChart";
import BarChart from "../utils/Charts/BarChart";
import PieChart from "../utils/Charts/PieChart";

definePageMeta({
  middleware: ["auth"],
});

const chartLabels = ["VueJs", "EmberJs", "ReactJs", "AngularJs"];
const chartData = [
  {
    label: "Data One",
    backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16"],
    data: [40, 20, 80, 10],
  },
];
</script>

<template>
  <div>
    <h1>Charts</h1>

    <div class="charts">
      <BarChart :labels="chartLabels" :data="chartData" />
      <PieChart :labels="chartLabels" :data="chartData" />
      <BubbleChart />
    </div>
  </div>
</template>

<style>
.charts {
  display: flex;
  flex-wrap: wrap;
  gap: 100px;
}
</style>
