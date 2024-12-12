<template>
    <div class="state-details">
        <h1>{{ state.name }}</h1>
        <p>{{ state.history }}</p>
        <p>{{ state.laws }}</p>
    </div>
</template>

<script>
import stateData from '@/data/stateData.js';

export default {
    props: {
        stateAbbr: {
            type: String,
            require: true
        }
    },
    computed: {
        state() {
            return stateData.find(s=>
                s.abbreviation === this.stateAbbr);
        }
    }
};
</script>

<style scoped>
.state-details{
    padding: 20 px;
}
</style>