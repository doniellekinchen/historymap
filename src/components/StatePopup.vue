<template>
    <div class="state-popup" v-if="show">
  
    <!-- <p>Sundown Towns: {{ state.hasSundownTowns ? 'Yes' : 'No' }}</p> -->
      <div class="popup-content">    
       
        <h3>{{ state.name }} ({{ state.abbreviation }}) <span v-if="state.hasSundownTowns">☀️</span></h3>
        <p>Population: {{ state.population }}</p>
        <p><a :href="state.history" target="_blank">Learn more</a></p>
        <button @click="close">Close</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      state: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        show: false
      }
    },
    methods: {
      open() {
        this.show = true;
      },
      close() {
        this.show = false;
      }
    }
  }
  </script>
  
  <style scoped>
  .state-popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }
  
  .popup-content {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
  </style>
  