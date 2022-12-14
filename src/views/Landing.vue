<template>
  <section>
    <Aside/>
    <div class="main-box-all">
      <Header :showInput="true" :number1="number1" :number2="number2" @input="nameData = $event"/>
      <div class="main-content basic">
        <Banner/>
        <SliderBottomControls/>
        <GridBox :nameProps="nameData"/>
        <Slider/>
      </div>
      <Footer :number1="number1" :number2="number2"/>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import SliderBottomControls from "@/components/SliderBottomControls.vue";
import GridBox from "@/components/GridBox.vue";
import Slider from "@/components/Slider.vue";
import Banner from "@/components/Banner.vue";
import Aside from "@/components/common/Aside.vue";
import Header from "@/components/common/Header.vue";
import Footer from "@/components/common/Footer.vue";


export default Vue.extend({
  name: 'Landing',
  components: {
    Aside,
    Banner,
    Header,
    SliderBottomControls,
    GridBox,
    Slider,
    Footer
  },
  data: () => ({
    nameData: '',
    number1: '+996 705 188 955',
    number2: '+453 705 188 955'
  })
});
</script>

<style lang="scss">
@import "@/assets/scss/color";
@import "@/assets/scss/fonts";
@import "@/assets/scss/_media";



body {

  section {
    min-width: 1170px;
    display: flex;
    background-color: $concrete;

    .main-box-all {
      width: 100%;
    }
  }

}

</style>
