<template>
  <div id="app">
    <app-header></app-header>
    <app-tag></app-tag>
    <keep-alive>
    <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
import AppHeader from './components/header'
import AppTag from './components/tab'
export default {
  components:{
    AppHeader,
    AppTag
  }
}
</script>
<style lang="stylus" scoped>
  
</style>
