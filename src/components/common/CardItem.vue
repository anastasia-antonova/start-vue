<template>
  <div class="item">
    <img :src="require(`@/assets/images/${data.img}.png`)" alt="hjh">
    <div class="content-item">
      <h3>{{data.name}}</h3>
      <p>{{data.gram}} грамм, {{data.peace}} кусочков</p>
      <div class="buy">
        <p class="price">{{data.price}} СОМ</p>
        <button>Хочу!</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {CardItemInterface} from "@/types/cardItemInterface";

export default Vue.extend({
  name: 'CardItem',
  props: {
    data: Object as () => CardItemInterface,
  }
});
</script>

<style scoped lang="scss">
@import "@/assets/scss/color";
@import "@/assets/scss/fonts";
@import "@/assets/scss/_media";

.item {
  width: 288px;
  height: 400px;
  background-color: $white;
  margin-top: 30px;
  margin-right: 42px;
  padding-left: 17px;
  padding-right: 8.80px;
  padding-bottom: 10px;
  box-sizing: border-box;

  &:nth-child(3), &:nth-child(6), &:nth-child(9) {
    margin-right: 0;
  }

  @include media_mobile {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 330px;
    height: 120px;
    margin-right: 0;
    border-radius: 10px;
    padding: 18px 14px;
    -top: 10px;

  }

  img {
    width: 253px;
    height: 211px;

    @include media_mobile {
      width: 100px;
      height: 84px;
      margin-top: 18px;
    }
  }

  .content-item {
    min-height: 180px;

    h3 {
      font-family: 'DIN Pro';
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 30px;
      color: $black;
      margin-bottom: 31px;
      min-height: 60px;

      @include media_mobile {
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        margin-bottom: 5px;
      }
    }

    > p {
      font-family: 'DIN Pro';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 22px;
      color: $edward;
      margin-bottom: 21px;

      @include media_mobile {
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        margin-bottom: 18px;
      }

    }
    .buy {
      display: flex;
      border-top: 0.5px solid $edward;
      padding-top: 5.70px;

      @include media_mobile {
        border-top: none;
      }


      .price {
        font-family: 'DIN Pro';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 30px;
        display: flex;
        align-items: center;
        color: $black;
        margin-right: 11px;

        @include media_mobile {
          font-weight: 700;
          font-size: 18px;
          line-height: 23px;
        }
      }

      button {
        width: 142px;
        height: 40px;
        background-color: $jaffa;
        font-family: 'DIN Pro';
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 30px;
        color: $concrete;
        border: none;
        border-radius: 5px;
        cursor: pointer;

        @include media_mobile {
          font-weight: 500;
          font-size: 18px;
          line-height: 22px;
          width: 95px;
          height: 26px;
        }

        &:hover {
          background-color: #be380a;
        }
      }
    }
  }
}

</style>
