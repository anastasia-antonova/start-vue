<template>
  <div class="banner" id="banner">
    <div class="item-banner" >
      <img src="${'image/' + value.img }" alt="hjh">
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Banner',
});
</script>

<style scoped lang="scss">
@import "@/assets/scss/color";
@import "@/assets/scss/fonts";
@import "@/assets/scss/_media";

.banner {

  .item-banner {
    margin-top: 30px;

    img {
      width: 950px;
    }
  }


}
</style>
