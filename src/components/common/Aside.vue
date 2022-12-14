<template>
  <aside v-bind:class="{'closeSide': hide}">
    <div class="logo1" v-bind:class="{'closeSide': hide}">
      <router-link to="/"><img src="@/assets/images/Logosidebar.svg" v-bind:alt="alt"></router-link>
    </div>
    <div class="components">
      <ul>
        <li v-for="(item, key) in listMenuArray" :key="key">
          <img :src="require(`@/assets/images/${item.way}.svg`)">
          <router-link v-if="item.path" :to="item.path">{{ item.name }}</router-link>
          <a href="#" v-else>{{ item.name }}</a>
        </li>
      </ul>
      <button id="buttonSide" class="sideBarButton"  v-on:click="toggleSide()">
        <span class="arrowSide"></span>
      </button>
    </div>
  </aside>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Aside',
  data: () => ({
    hide: false,
    listMenuArray: [
      {name: 'Пицца', way: 'piza'},
      {name: 'Сеты', way: 'set', path: '/set'},
      {name: 'WOK', way: 'vog'},
      {name: 'Роллы', way: 'rol'},
      {name: 'Суши', way: 'set'},
      {name: 'Салаты', way: 'salad'},
      {name: 'Супы', way: 'sup'},
      {name: 'Корн доги', way: 'hot'},
      {name: 'Напитки', way: 'drink'},
      {name: 'Акции', way: 'stock', path: '/about'},
    ]

  }),

  mounted() {
    // this.checkRoll();
  },
  methods: {

    toggleSide() {
      this.hide = !this.hide;
    },
    // checkRoll() {
    //   const zalypa_z_bekendy = 50;
    //   if(zalypa_z_bekendy > 30) {
    //     this.showRol = true;
    //   } else {
    //     this.showRol = false;
    //   }
    // }
  }
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
    transition: min-width 0.2s ease-in;
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
            transition-delay: 2s;
          }
        }
      }
      .sideBarButton {
        top: 112px;
        left: 62px;
        transition: left 0.2s ease-in;

        .arrowSide {
          right: 4px;
          transform: rotate(135deg);
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
      cursor: pointer;
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
    button {
      &.sideBarButton {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        top: 125px;
        position: absolute;
        left: 307px;
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
    }
  }
}
</style>
