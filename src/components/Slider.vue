<template>
  <div class="slider">
    <button class="leftButton"></button>
    <div class="box">
      <CardItem v-for="(item, key) in cardsArray" :key="key" :data="item"/>
    </div>
    <button class="rightButton"></button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import CardItem from "@/components/common/CardItem.vue";
import {CardItemInterface} from "@/types/cardItemInterface";

export default Vue.extend({
  name: 'Slider',
  components: {
    CardItem,
  },
  data: () => ({
    test: '' as any,
    cardsArray: [] as CardItemInterface[]
  }),
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.cardsArray = [
        {
          img: 'img_1',
          name:"Aаломон сет 1",
          price: "1000",
          gram: '1000',
          peace: '8'
        },
        {
          img: 'img_2',
          name:"Филадельфия и лосось сет",
          price: "1200",
          gram: '2000',
          peace: '12'
        },
        {
          img: 'img_3',
          name:"Самая большая Филадельфия",
          price: "2000",
          gram: '100',
          peace: '16'
        },
      ];
    }
  }
});
</script>

<style scoped lang="scss">
@import "@/assets/scss/color";
@import "@/assets/scss/fonts";
@import "@/assets/scss/_media";

.slider {
  .leftButton {

  }
  .rightButton {
    top: -224px;
    right: -965px;
  }
  .box {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    position: relative;

  }
}
</style>
