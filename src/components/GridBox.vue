<template>
  <div class="grid-box">
    <div class="grid-body desktop">
      <div class="grid-item column_span_2 grid-item-1"><p>{{nameProps}}</p></div>
      <div class="grid-item grid-item-2"><p>С угрем</p></div>
      <div class="grid-item grid-item-3"><p>Корн дог</p></div>
      <div class="grid-item column_span_2 grid-item-4"><p>Пицца</p></div>
      <div class="grid-item column_span_2 grid-item-5"><p>Акции</p></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'GridBox',
  props: {
    nameProps: String,
  },
});
</script>

<style scoped lang="scss">
@import "@/assets/scss/color";
@import "@/assets/scss/fonts";
@import "@/assets/scss/_media";

.grid-box {
  min-height: 450px;
  margin-top: 31px;
  .grid-body {
    display: grid;

    &.desktop {
      grid-template: repeat(2, 200px) / repeat(4, 25%);

    }

    .grid-item {
      margin: 13px;
      background-position: center;
      background-repeat: no-repeat;
      border-radius: 5px;
      background-size: cover;
      display: flex;
      align-items: flex-end;
      position: relative;

      &::after {
        content: "";
        width: 100%;
        height: 200px;
        position: absolute;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%);
        background-size: cover;
        border-radius: 15px;

        @include media_mobile {
          border-radius: 5px;
        }
      }



      p {
        font-family: 'DIN Pro';
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 30px;
        color: $white;
        padding: 10px;
        z-index: 2;
      }

      &.row_span_2 {
        grid-row-start: span 2;
      }

      &.column_span_2 {
        grid-column-start: span 2;
      }

      &:nth-child(1), &:nth-child(4) {
        margin-left: 0;
      }
      &:nth-child(3), &:nth-child(5) {
        margin-right: 0;
      }


      &.grid-item-1 {
        background-image: url("../assets/images/grid-1.png");
      }

      &.grid-item-2 {
        background-image: url("../assets/images/grid-2.png");
      }

      &.grid-item-3 {
        background-image: url("../assets/images/grid-3.png");
      }

      &.grid-item-4 {
        background-image: url("../assets/images/grid-4.png");
      }

      &.grid-item-5 {
        background-image: url("../assets/images/grid-5.png");
      }

    }
  }
}
</style>
