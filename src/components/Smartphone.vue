<template>
  <fullscreen ref="fullscreen" @change="fullscreenChange" class="smartphone-frame">
        <Forehead class="hidden-mobile"/>

        <div class="visible-mobile" v-if="showFullscreenMessage" style="width:100%; height:100%; background-color: rgba(0,0,0,0.6); position: absolute; z-index: 9999">
            <p>For a better experience, I recommended to toggle the fullscreen mode.</p>
            <p>Notice that pressing the back button of your device will exit from fullscreen mode.</p>
            <button @click="toggle">Toggle fullscreen</button>
            <button @click="showFullscreenMessage = false">Dismiss</button>
        </div>

        <Screen :isFullscreen="fullscreen"/>
        <Chin :class="{'hidden-mobile': !fullscreen}"/>
  </fullscreen>
</template>

<script>
import Forehead from './Forehead';
import Screen from './Screen';
import Chin from './Chin';

import fullscreen from 'vue-fullscreen'
import Vue from 'vue'
Vue.use(fullscreen)

export default {
    data() {
      return {
        fullscreen: false,
        showFullscreenMessage: true,
      }
    },

    components: {
        Forehead, Screen, Chin
    },

    methods: {
        toggle () {
            this.$refs['fullscreen'].toggle();
            this.showFullscreenMessage = false;
        },
        fullscreenChange (fullscreen) {
            this.fullscreen = fullscreen
        }
    },
}
</script>

<style lang="scss">


.smartphone-frame {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: relative;
    height: calc(100vh - 60px);
    width: calc(404px - 60px);
    max-height: 640px;
    border: 16px solid #0c0c0d;
    border-radius: 40px;
    box-shadow: 
    (-$frameThickness) (-$frameThickness) 2px $frameGrey,
    (-$frameThickness) $frameThickness 2px $frameGrey,
    $frameThickness (-$frameThickness) 2px $frameGrey,
    $frameThickness $frameThickness 2px $frameGrey,
}

@media (max-width: 500px) {
    .smartphone-frame {
        margin: 0 auto;
        position: relative;
        height: 100vh;
        width: 100%;
        max-height: 100%;
        border: none;
        border-radius: 0px;
        box-shadow: 
        (-$frameThickness) (-$frameThickness) 2px $frameGrey,
        (-$frameThickness) $frameThickness 2px $frameGrey,
        $frameThickness (-$frameThickness) 2px $frameGrey,
        $frameThickness $frameThickness 2px $frameGrey,
    }
    
    .hidden-mobile {
        display: none;
    }
}

@media (min-width: 501px) {
    .visible-mobile {
        display: none;
    }
}
</style>