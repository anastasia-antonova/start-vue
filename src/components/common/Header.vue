<template>
  <header id="header">
    <div class="left-content">
      <img src="@/assets/images/logo.png" alt="kj">
      <div class="phone">
        <h3>Наш телефон</h3>
        <p class="number">{{number1}}</p>
        <p class="number">{{number2}}</p>
        <p class="color-gray">работаем с 10:00 до 00:00</p>
      </div>
      <div class="city">
        <p>Город:</p>
        <p>Бишкек</p>
      </div>
    </div>
    <div class="right-content">
      <p>Отзывы</p>
      <a href="#" class="pay">Доставка и оплата</a>
      <div class="search-div" v-if="showInput" >
        <input type="text" placeholder="search" id="textSearch" @input="$emit('input', $event.target.value)">
        <button id="closeV"  onclick="resetValue()"></button>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Header',
  props: {
    showInput: Boolean,
    number1: String,
    number2: String
  },

  data: () => ({
    text: "",
  }),
  methods: {
    cgcgcgc() {
      console.log('wawaw')
      // $emit('input', text)
    }
  }
});
</script>

<style scoped lang="scss">
@import "@/assets/scss/color";
@import "@/assets/scss/fonts";
@import "@/assets/scss/_media";

header {
  width: 100%;
  min-height: 95px;
  border: 0.5px solid $edward;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .sideBarButton {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    top: 67px;
    position: absolute;
    left: -9px;
    border: none;
    background-color: #F46D40;

    .arrowSide {
      position: absolute;
      right: 7px;
      top: 5px;
      width: 0px;
      height: 0;
      transform: rotate(313deg);
      border-width: 0 1px 1px 0;
      border-style: solid;
      border-color: #e6f3e5;
      padding: 4px;
      cursor: pointer;
    }
  }

  @include media_mobile {
    background-color: $white;
    padding-left: 19px;
  }

  .left-content {
    display: flex;


    @include media_mobile {
      align-items: center;
    }

    img {
      display: none;
      @include media_mobile {
        display: block;
        width: 47px;
        height: 43px;
      }
    }

    .phone {
      border-right: 0.5px solid $edward;
      padding: 6px 15px 8px 35px;
      box-sizing: border-box;

      @include media_mobile {
        border-right: none;
      }

      h3 {
        font-family: 'DIN Pro';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        color: $cod_gray;
      }
      .number {
        font-family: 'DIN Pro';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 100%;
        color: $neonc_carrot;
      }
      .color-gray {
        font-family: 'DIN Pro';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: $edward;
      }
    }
    .city {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 15px;

      @include media_mobile {
        display: none;
      }

      p {
        &:first-child {

          font-family: 'DIN Pro';
          font-style: normal;
          font-weight: 300;
          font-size: 14px;
          line-height: 17px;
          color: $edward;
          margin-bottom: 4px;
        }

        &:nth-child(2) {
          font-family: 'DIN Pro';
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 22px;
          color: $black;
        }
      }
    }
  }
  .right-content {
    display: flex;
    padding-right: 40px;

    .search-div {
      position: relative;

      button {
        display: none;
        width: 10px;
        height: 10px;
        background-image: url("@/assets/images/close.png");
        background-size: 10px;
        background-repeat: no-repeat;
        border: none;
        cursor: pointer;
        position: absolute;
        top: 6px;
        right: 5px;
        background-color: inherit;

        &.show-btn {
          display: inline-block;
        }
      }

      .search {
        width: 30px;
        height: 30px;
        background-image: url("@/assets/images/search.svg");
        cursor: pointer;
      }
    }

    p {
      font-family: 'DIN Pro';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      color: $cod_gray;
      margin-right: 10px;

      @include media_mobile {
        display: none;
      }
    }
    .pay {
      font-family: 'DIN Pro';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      color: $neonc_carrot;
      text-decoration: none;
      margin-right: 69px;

      @include media_mobile {
        display: none;
      }
    }
  }

}
</style>
