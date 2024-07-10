<template>
  <div id="app" class="h100">
    <keep-alive>
      <router-view class="keep-alive" v-if="keepAlive" :key="$route.fullPath"></router-view>
    </keep-alive>
    <router-view v-if="!keepAlive" :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
import Vuex from 'vuex'

export default {
  name: 'App',
  computed: {
    ...Vuex.mapState({
      skin: state => state.common.skin
    })
  },
  data() {
    return {
      keepAlive: false
    }
  },
  watch: {
    $route(to) {}
  },
  created() {
    this.$router.onReady(() => {
      this.keepAlive = this.$route?.meta?.keepAlive
      console.log('keepAlive:', this.keepAlive)
    })
    document.body.classList.add(this.skin)
  }
}
</script>
