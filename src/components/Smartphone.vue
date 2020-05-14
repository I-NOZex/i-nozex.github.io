<template>
  <div class="smartphone-frame">
      <Forehead />
      <Screen />
      <Chin />
  </div>
</template>

<script>
import Forehead from './Forehead';
import Screen from './Screen';
import Chin from './Chin';

export default {
    components: {
        Forehead, Screen, Chin
    }
}
</script>

<style lang="scss">

.smartphone-frame {
    position: relative;
    height: 800px;
    width: 404px;
    border: 16px solid #0c0c0d;
    border-radius: 40px;
    box-shadow: 
    (-$frameThickness) (-$frameThickness) 2px $frameGrey,
    (-$frameThickness) $frameThickness 2px $frameGrey,
    $frameThickness (-$frameThickness) 2px $frameGrey,
    $frameThickness $frameThickness 2px $frameGrey,
}
</style>