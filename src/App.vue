<template>
  <div id="app">
    <div class="row">
      <Pbutton  @click='change' disabled>按钮 </Pbutton >
      <Pbutton type='primary' disabled >按钮</Pbutton >
      <Pbutton type='success' disabled>按钮</Pbutton >
      <Pbutton type='info' disabled>按钮</Pbutton >
      <Pbutton type='warning' disabled>按钮</Pbutton >
      <Pbutton type='danger' disabled>按钮</Pbutton >
    </div>
  </div>
</template>

<script>
import Pbutton from './components/button.vue'
export default {
  name: 'App',
  components: {
    Pbutton
  },
  methods: {
    change (e) {
      console.log(e)
    }
  }
}
</script>

<style lang="scss">
.row {
  margin: 10px;
}
</style>
