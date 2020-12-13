<template>
  <div class="hello">
      <h1>modle1 index</h1>

      <div class="close_icon">

      </div>
      <BaseButton></BaseButton>
   
  </div>
</template>

<script>
import BaseButton from './model1.secord.vue'
export default {
  name: 'model1index',
  path:'model1/pages/',
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
.close_icon {
  display: inline-block;
  width: 100px;
  height: 100px;
  border: 1px solid #000;
  border-radius: 50%;
  position: relative;
}
.close_icon::before {
  position: absolute;
  content: " ";
  display: inline-block;
  width: 1px;
  height: 100px;
  background: #000;
  transform: rotate(45deg);
   /* transform-origin:center center;  */
}
.close_icon::after {
  position: absolute;
   content: " ";
  display: inline-block;
  width: 1px;
  height: 100px;
   background: #000;
     transform: rotate(135deg);
   /* transform-origin:center center;  */
}
</style>
