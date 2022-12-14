<template>
  <section>
    <Aside/>
    <div class="main-box-all">
      <Header :showInput="true" :number1="number1" :number2="number2" @input="nameData = $event"/>
      <div class="main-content basic">
        <Banner/>
        <SliderBottomControls/>
        <GridBox :nameProps="nameData"/>
        <div class="cont-text-select">
          <h2>Сеты</h2>
          <div class="custom-menu">
            <ul class="menu__list">
              <li>
                <p class="select_current">По умолчанию</p>
                <span class="menu__arrow arrow"></span>
                <ul class="sub-menu__list" id="fu">
                  <li >
                    <a href="#" class="sub-menu__link" onclick="selectcha(0)">По умолчанию</a>
                  </li>
                  <li>
                    <a href="#" class="sub-menu__link" onclick="selectcha(1)">Название</a>
                  </li>
                  <li>
                    <a href="#" class="sub-menu__link" onclick="selectcha(2)" >Сначала дешевле</a>
                  </li>
                  <li>
                    <a href="#" class="sub-menu__link" onclick="selectcha(3)">Сначала дороже</a>
                  </li>
                  <li>
                    <a href="#" class="sub-menu__link" onclick="selectcha(4)">Количество кусочков</a>
                  </li>
                  <li>
                    <a href="#" class="sub-menu__link" onclick="selectcha(5)">Вес</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div class="box">
          <CardItem v-for="(item, key) in cardsArray" :key="key" :data="item"/>
        </div>
        <div class="pagination">
          <button class="left" onclick="leftButton()"><</button>
          <div class="pagination-content"></div>
          <button class="right" onclick="rightButton()">></button>
        </div>
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
import CardItem from "@/components/common/CardItem.vue";
import {CardItemInterface} from "@/types/cardItemInterface";


export default Vue.extend({
  name: 'ItemsPage',
  components: {
    Aside,
    Header,
    CardItem,
    Footer
  },
  data: () => ({
    nameData: '',
    number1: '+996 705 188 955',
    number2: '+453 705 188 955',
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
        {
          img: 'img_4',
          name:"Dаломон сет 4",
          price: "1559",
          gram: '200',
          peace: '16'
        },
        {
          img: 'img_3',
          name:"Eаломон сет 5",
          price: "1519",
          gram: '120',
          peace: '15'
        },
        {
          img: 'img_5',
          name:"Iаломон сет 6",
          price: "1465",
          gram: '458',
          peace: '43'
        },
        {
          img: 'img_7',
          name:"Dаломон сет 7",
          price: "1539",
          gram: '456',
          peace: '3'
        },
        {
          img: 'img_8',
          name:"Саломон сет 8",
          price: "1443",
          gram: '120',
          peace: '9'
        },
        {
          img: 'img_9',
          name:"Саломон сет 9",
          price: "143",
          gram: '120',
          peace: '5'
        },
      ];
    }
  }
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
    margin-bottom: 100px;

    .main-box-all {
      width: 100%;

      .cont-text-select {
        display: flex;
        justify-content: space-between;
        margin-top: 22px;

        .custom-menu{
          background-color: #FFFFFF;
          width: 198px;
          height: 70px;
          border-radius: 15px;

          .menu__list {
            border-radius: 15px;
            box-shadow: 0px 0px 18px 6px rgb(0 0 0 / 9%);
            li {
              list-style: none;
              position: relative;

              >p{
                font-family: 'DIN Pro';
                font-style: normal;
                font-weight: 400;
                font-size: 18px;
                line-height: 22px;
                padding-bottom: 10px;
                border-bottom: 0.5px solid #A4ACAD;
                padding-top: 26px;
                max-width: 180px;
                margin-left: 14px;

              }
              span {
                &.menu__arrow {
                  &.arrow {
                    position: absolute;
                    right: 20px;
                    top: 33px;
                    width: 0px;
                    height: 0;
                    transform: rotate(224deg);
                    border-width: 0 1px 1px 0;
                    border-style: solid;
                    border-color: $jaffa;
                    padding: 4px;

                    cursor: pointer;

                  }
                  &.active {
                    transform: rotate(45deg);
                  }
                }
              }


              a {
                cursor: pointer;

                &.sub-menu__link{
                  text-decoration: none;
                  color: black;
                  font-family: 'DIN Pro';
                  font-style: normal;
                  font-weight: 400;
                  font-size: 18px;
                  line-height: 22px;


                  &:hover {
                    color: $jaffa;
                  }
                }
              }
            }
            .sub-menu__list {
              display: none;
              width: 198px;
              position: absolute;
              background-color: #FFFFFF;
              box-shadow: 0px 0px 18px 6px rgba(0, 0, 0, 0.09);
              padding-top: 10px;
              box-sizing: border-box;
              padding-left: 13px;
              &.open {
                display: block;
              }

              >li {
                margin-bottom: 20px;
              }

            }
          }
        }
      }
      .box {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        position: relative;

      }
      .pagination {

        display: flex;
        justify-content: flex-end;
        margin-top: 100px;
        margin-right: 107px;

        @include media_mobile{
          display: flex;
          margin-top: 50px;
          justify-content: center;
          align-items: center;
          margin-right: inherit;

        }

        .pagination-content {

          button {
            @include media_mobile {
              width: 36px;
              height: 36px;
              border-radius: 50%;
              margin-right: 4px;
            }
          }
        }

        .left {
          margin-right: 14px;
        }

        .right {
          margin-left: 14px;

          @include media_mobile {
            margin-left: 10px;
          }
        }

        button {
          width: 75px;
          height: 25px;
          margin-top: 13px;
          border: 1px solid #2c2a2a;
          border-radius: 5px;
          cursor: pointer;
          margin-right: 2px;

          @include media_mobile {
            width: 36px;
            height: 36px;
            border-radius: 50%;
          }

          &.active {
            background-color: $jaffa;
            color: white;
          }
        }
      }

    }
  }

}

</style>
