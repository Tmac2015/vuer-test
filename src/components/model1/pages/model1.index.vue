<template>
  <div class="hello">
      <h1>modle1 index</h1>
      <BaseButton></BaseButton>
  </div>
</template>

<script>
import BaseButton from './model1.secord.vue'
export default {
  name: 'model1index',
  isVuex:true,
  components:{
    BaseButton
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
   beforeCreate() {
     console.log("父组件beforeCreate")
  },
  created() {
     console.log("父组件created")
  },
   beforeMount() {
      console.log("父组件beforeMount")
  },
  mounted() {
    console.log("父组件mounted")
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
