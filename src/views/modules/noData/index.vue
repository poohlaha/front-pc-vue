<template>
  <div class="wh100 bg-white flex-center flex-direction-column no-data">
    <img :src="imageUrl" alt="" />
    <p class="page-top-margin">{{ text }}</p>
  </div>
</template>

<script>
/**
 * 没有数据展示
 */
export default {
  name: 'NoDataModule',
  props: {
    // 图片地址
    imageUrl: {
      type: String,
      default: require('@assets/images/public/noData.png')
    },

    // 文字
    text: {
      type: String,
      default: ''
    }
  }
}
</script>
