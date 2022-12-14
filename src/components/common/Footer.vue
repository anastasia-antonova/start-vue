<template>
  <footer class="basic">
    <div class="services">
      <ul>
        <li><a href="">О компании</a></li>
        <li><a href="">Доставка и оплата</a></li>
        <li><a href="">Лента материалов</a></li>
        <li><a href="">Политика возврата</a></li>
      </ul>
    </div>
    <div class="sotial">
      <p class="name-servises">Введите номер</p>
      <p class="telephone">+996 (__) ___ __ __</p>
      <p class="tel">Выберите удобный
        мессенджер для общения</p>
      <div class="logo-sotial">
        <img src="@/assets/images/whatsapp.svg" alt="ffg">
        <img src="@/assets/images/telegram.svg" alt="dfe">
        <img src="@/assets/images/instagram.svg" alt="grh">
      </div>
    </div>
    <div class="contact">
      <p>Тел:<span>{{number1}}</span></p>
      <p>Тел:<span>{{number2}}</span></p>
      <p>Адрес:Бакаева 126</p>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Footer',
  props: {
    number1: String,
    number2: String
  }


});
</script>

<style scoped lang="scss">
@import "@/assets/scss/color";
@import "@/assets/scss/fonts";
@import "@/assets/scss/_media";

footer {

  display: flex;
  width: 100%;
  min-height: 268px;
  border-top: 0.5px solid  $edward;
  padding-top: 22px;


  .services, .sotial, .contact {
    padding-top: 9px;
  }

  .services {
    padding-right: 133px;

    ul {

      li {
        margin-bottom: 20px;

        a {
          font-family: 'DIN Pro';
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 100%;
          color: $black;
          text-decoration: none;

          &:hover {

          }

        }
      }
    }

  }

  .sotial {
    padding-left: 41px;
    border-left: 0.5px solid  $edward;
    border-right: 0.5px solid  $edward;
    max-width: 330px;
    padding-right: 77px;

    .telephone {
      font-family: 'DIN Pro';
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      color: $edward;
      margin-bottom: 20px;
    }



    .name-servises {
      font-family: 'DIN Pro';
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      color: $black;
      margin-bottom: 10px;
    }

    .tel {
      font-family: 'DIN Pro';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      margin-bottom: 10px;
      color: $edward;
    }

    .logo-sotial {
      margin-top: 10px;
      img {

        &:nth-child(2) {
          margin-right: 30px;
          margin-left: 30px;
        }
      }
    }

  }

  .contact{
    padding-left: 41px;

    p {
      font-family: 'DIN Pro';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      color: $edward;
      margin-bottom: 5px;

      span {
        text-decoration: underline;
      }
    }
  }
}
</style>
