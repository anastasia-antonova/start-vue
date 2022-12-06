<template>
  <div class="slider-bottom-controls">
    <button class="active-controls" onclick="showBannerImage()"></button>
    <button  onclick="showBannerImage()"></button>
    <button  onclick="showBannerImage()"></button>
    <button  onclick="showBannerImage()"></button>
    <button  onclick="showBannerImage()"></button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'SliderBottomControls',

});
</script>

<style scoped lang="scss">
@import "@/assets/scss/color";
@import "@/assets/scss/fonts";
@import "@/assets/scss/_media";

.slider-bottom-controls {
  max-width: 10%;
  margin: auto;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  @include media_tablet {
    max-width: 12%;
  }
  @include media_mobile {
    margin-top: 15px;
  }


  button {
    min-width: 6px;
    min-height: 6px;
    background-color: $edward;
    border: none;
    border-radius: 50%;
    padding: 0;
    margin-right: 7px;
    margin-left: 7px;
    cursor: pointer;

    &.active-controls {
      min-width: 12px;
      min-height: 12px;
      background-color: #E97522;
    }
  }
}
</style>
