<template>
  <div id="app">
   <nav>
     <div class="floatL margin10 navItem" @click="changeColor(index)" :class="[navIndex === index ? 'blueBackground' : '']" v-for="(navItem,index) in navigationData" :key="'i'+index" >{{navItem}}</div>
    </nav>
  </div>
</template>

<script>
// import Pbutton from './components/button.vue'
export default {
  name: 'App',
  data () {
    return {
      navigationData: ['首页', '头条', '健身', '阅读'],
      navIndex: -1
    }
  },
  components: {
    // Pbutton
  },
  methods: {
    // 导航栏变色
    changeColor (index) {
      this.navIndex = index
    }
  }
}
</script>

<style lang="scss">
.row {
  margin: 10px;
}
.navItem {
  width:40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: grey;
}
.blueBackground {
  color:white;
  background-color: skyblue;
}

.floatL {
  float: left;
}
.margin10 {
  margin: 10px;
}
</style>
