<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>

      <li  @click="xinfo" >
        btn
      </li>
    </ul>
  </div>
</template>

<script>
 
 
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    xinfo() {
      let xInfos = new Image();
      xInfos.src = "https://hm.baidu.com/hm.gif?cc=1&ck=1&cl=24-bit&ds=1536x864&vl=1422&ep=29403*922!122161*1222!123034*1422!140870*1022&et=6&ja=0&ln=zh-cn&lo=0&lt=1604814826&rnd=55612679&si=6bcd52f51e9b3dce32bec4a3997715ac&su=https%3A%2F%2Fwww.baidu.com%2Flink%3Furl%3Dsa8Dk5SSaWFC4lLILSuzyx3fm-4VUkTmReUygB2lNv2P3b-FEaVybeq2fpR20IEHvDdAUiY14cH5SWBUflt4XIUPpmBnHF0LOS3Px3o3Vny%26wd%3D%26eqid%3D9e5d2567003e8a59000000045fa787d9&v=1.2.77&lv=3&sn=59281&r=0&ww=1536&u=https%3A%2F%2Fblog.csdn.net%2Fweixin_34392843%2Farticle%2Fdetails%2F91367766";
    
    }
  },
  mounted() {
 

   

  },
  
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
