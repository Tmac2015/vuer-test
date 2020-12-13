<template>
  <div class="hello">
      <h1>modle1 secord</h1>
         <div class="close_icon">

      </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  path:'model1/pages/',
  mounted() {
      console.log("子组件mounted")
  },
   beforeCreate() {
     console.log("子组件beforeCreate")
  },
   created() {
     console.log("子组件created")
  },
  beforeMount() {
      console.log("子组件beforeMount")
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
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
  height: 80px;
  background: #000;
  transform: rotate(45deg);
      margin-top: 10px;
   /* transform-origin:center center;  */
}
.close_icon::after {
  position: absolute;
   content: " ";
  display: inline-block;
  width: 1px;
  height: 80px;
   background: #000;
     transform: rotate(135deg);
         margin-top: 10px;
   /* transform-origin:center center;  */
}
</style>
