<template>
  <aside id="aside">
    <div class="logo1">
      <img src="@/assets/images/Logosidebar.svg" alt="verv">
    </div>
    <div class="components">
      <ul>
        <li><img src="@/assets/images/piza.svg" alt="verv">
          <a href="#">Пицца</a>
        </li>
        <li>
          <img src="@/assets/images/set.svg" alt="vedv">
          <a href="#">Сеты</a>
        </li>
        <li>
          <img src="@/assets/images/vog.svg" alt="cdv">
          <a href="#">WOK</a>
        </li>
        <li>
          <img src="@/assets/images/rol.svg" alt="cdv">
          <a href="#">Роллы</a>
        </li>
        <li><img src="@/assets/images/set.svg" alt="cdv">
          <a href="#">Суши</a>
        </li>
        <li><img src="@/assets/images/salad.svg" alt="cdv">
          <a href="#">Салаты</a>
        </li>
        <li><img src="@/assets/images/sup.svg" alt="cdv">
          <a href="#">Супы</a>
        </li>
        <li><img src="@/assets/images/hot.svg" alt="cdv">
          <a href="#">Корн доги</a>
        </li>
        <li><img src="@/assets/images/drink.svg" alt="cdv">
          <a href="#">Напитки</a>
        </li>
        <li><img src="@/assets/images/stock.svg" alt="cdv">
          <a href="#">Акции</a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Aside',
});
</script>

<style scoped lang="scss">
@import "@/assets/scss/color";
@import "@/assets/scss/fonts";
@import "@/assets/scss/_media";

aside {
  min-width: 320px;
  padding-left: 100px;
  padding-right: 31px;
  box-sizing: border-box;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;

  &.closeSide {
    min-width: 70px;
    padding: 10px;
    box-sizing: border-box;
    .logo1 {
      img {
        width: 45px;
      }
    }
    .components {
      ul {
        li {
          img {
            display: block;
            margin: auto;
          }
          a {
            display: none;
          }
        }
      }
    }
  }

  .logo1 {
    border-bottom: 0.5px solid $edward;
    padding-bottom: 26px;
    padding-top: 26px;
    box-sizing: border-box;

    img{
      display: block;
      margin: auto;
    }

  }
  .components {

    ul {
      display: flex;
      flex-direction: column;
      margin-top: 31px;
      li {
        display: flex;
        margin-bottom: 31px;

        >img {
          margin-right: 20px;
        }
        a {
          font-family: 'DIN Pro';
          font-style: normal;
          font-weight: 400;
          font-size: 24px;
          line-height: 30px;
          color: $black;
          text-decoration: none;
          &:hover {
            color: $neonc_carrot;
          }
        }
      }
    }
  }
}
</style>
