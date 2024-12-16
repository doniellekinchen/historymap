<template>
    <div class="legend">
      <h3>Legend</h3>
      <div class="legend-item" v-for="item in legendItems" :key="item.label">
        <span class="legend-icon">{{ item.icon }}</span>
        <span class="legend-label">{{ item.label }}</span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        legendItems: [
          { icon: '🔴', label: 'Republican-leaning State' },
          { icon: '🔵', label: 'Democrat-leaning State' },
          { icon: '☀️', label: 'Has Sundown Towns'},
          { icon: '🌀', label: 'Hurricane Prone'},
          { icon: '🌪️', label: 'Tornado Prone'},
          { icon: '🌋', label: 'Has Volcanos (active and inactive)'}
          // Add more legend items as needed
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .legend {
    background-color: white;
    padding: 1rem;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  .legend-item {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
  }
  
  .legend-icon {
    margin-right: 0.5rem;
    font-size: 1.2rem;
  }
  
  .legend-label {
    font-size: 0.9rem;
  }
  </style>
  