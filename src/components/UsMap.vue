<template>
  <div class="map-container">
    <svg :viewBox="viewBox" @click="handleClick" @mouseover="handleMouseover" @mouseout="handleMouseout">
      <path
        v-for="state in stateData"
        :key="state.abbreviation"
        :d="state.path"
        :data-state="state.abbreviation"
        class="state-path"
        :class="{ 'hovered': hoveredState === state.abbreviation }"
      />
    </svg>
    <StatePopup v-if="selectedState" :state="selectedState" ref="popup" />
    <LegendBox class="legend-box" />

  </div>
</template>

<script>
import stateData from '@/data/stateData.js';
import StatePopup from '@/components/StatePopup.vue';
import LegendBox from './LegendBox.vue';

export default {
  components: {
    StatePopup,
    LegendBox
  },
  data() {
    return {
      stateData,
      viewBox: "0 0 1000 589",
      selectedState: null,
      hoveredState: null
    };
  },
  methods: {
    handleClick(event) {
      const stateAbbr = event.target.dataset.state;
      if (stateAbbr) {
        this.selectedState = this.stateData.find(state => state.abbreviation === stateAbbr);
        if (this.$refs.popup) {
          this.$refs.popup.open();
        }
      }
    },
    handleMouseover(event) {
      this.hoveredState = event.target.dataset.state;
    },
    handleMouseout() {
      this.hoveredState = null;
    }
  }
};
</script>

<style scoped>
.state-path {
  fill: white;
  stroke: black;
  stroke-width: 1px;
  transition: fill 0.3s ease;
}

.state-path.hovered {
  transition: fill 0.3s ease;
}

.state-path.hovered[data-state='MT'],
.state-path.hovered[data-state='ID'],
.state-path.hovered[data-state='NV'],
.state-path.hovered[data-state='AZ'],
.state-path.hovered[data-state='WY'],
.state-path.hovered[data-state='ND'],
.state-path.hovered[data-state='SD'],
.state-path.hovered[data-state='UT'],
.state-path.hovered[data-state='NE'],
.state-path.hovered[data-state='KS'],
.state-path.hovered[data-state='OK'],
.state-path.hovered[data-state='TX'],
.state-path.hovered[data-state='IA'],
.state-path.hovered[data-state='MO'],
.state-path.hovered[data-state='AR'],
.state-path.hovered[data-state='LA'],
.state-path.hovered[data-state='WI'],
.state-path.hovered[data-state='IN'],
.state-path.hovered[data-state='KY'],
.state-path.hovered[data-state='TN'],
.state-path.hovered[data-state='MS'],
.state-path.hovered[data-state='AL'],
.state-path.hovered[data-state='GA'],
.state-path.hovered[data-state='FL'],
.state-path.hovered[data-state='SC'],
.state-path.hovered[data-state='NC'],
.state-path.hovered[data-state='OH'],
.state-path.hovered[data-state='WV'],
.state-path.hovered[data-state='PA'],
.state-path.hovered[data-state='AK'],
.state-path.hovered[data-state='MI'] {
  fill: #E81B23; /* Republican-leaning state hover color */
}

.state-path.hovered[data-state='WA'],
.state-path.hovered[data-state='OR'],
.state-path.hovered[data-state='CA'],
.state-path.hovered[data-state='CO'],
.state-path.hovered[data-state='NM'],
.state-path.hovered[data-state='HI'],
.state-path.hovered[data-state='MN'],
.state-path.hovered[data-state='IL'],
.state-path.hovered[data-state='ME'],
.state-path.hovered[data-state='VT'],
.state-path.hovered[data-state='NH'],
.state-path.hovered[data-state='MA'],
.state-path.hovered[data-state='RI'],
.state-path.hovered[data-state='CT'],
.state-path.hovered[data-state='NJ'],
.state-path.hovered[data-state='DE'],
.state-path.hovered[data-state='MD'],
.state-path.hovered[data-state='DC'],
.state-path.hovered[data-state='NY'],
.state-path.hovered[data-state='VA'] {
  fill: #99ddff; /* Democrat-leaning state hover color */
}


.map-container {
  position: relative;
}

.legend-box {
  position: absolute;
  top: -15rem;
  left: 1rem;
  background-color: white;
  padding: 1rem;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  max-width: 300px;
}
</style>