<template>
  <div class="slider">
    <button class="leftButton"></button>
    <div class="box">
      <div class="item">
        <img src="../assets/images/img_1.png" alt="hjh">
        <div class="content-item">
          <h3>Aаломон сет 1</h3>
          <p>120 грамм, 8 кусочков</p>
          <div class="buy">
            <p class="price">1500 СОМ</p>
            <button>Хочу!</button>
          </div>
        </div>

      </div>
      <div class="item">
        <img src="../assets/images/img_1.png" alt="hjh">
        <div class="content-item">
          <h3>Филадельфия и
            лосось сет</h3>
          <p>120 грамм, 8 кусочков</p>
          <div class="buy">
            <p class="price">1500 СОМ</p>
            <button>Хочу!</button>
          </div>
        </div>

      </div>
      <div class="item">
        <img src="../assets/images/img_1.png" alt="hjh">
        <div class="content-item">
          <h3>Самая большая Филадельфия</h3>
          <p>120 грамм, 8 кусочков</p>
          <div class="buy">
            <p class="price">1500 СОМ</p>
            <button>Хочу!</button>
          </div>
        </div>

      </div>
    </div>
    <button class="rightButton"></button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Slider',

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

    .item {
      padding-bottom: 10px;
      .content-item {
        min-height: 180px;

        h3 {
          min-height: 60px;
        }
      }
    }
  }
}
</style>
