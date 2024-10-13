<template>
  <div id="app">
    <UniverSheet :data="data" />
  </div>
</template>

<script setup lang="ts">
import UniverSheet from './components/UniverSheet.vue'
import { DEFAULT_WORKBOOK_DATA } from './assets/default-workbook-data'
import { ref } from 'vue';

const data = ref(DEFAULT_WORKBOOK_DATA);



</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}

#app {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

#sheet {
  /** The height of the Union uses the height of the parent container */
  flex: 1;
}
</style>
