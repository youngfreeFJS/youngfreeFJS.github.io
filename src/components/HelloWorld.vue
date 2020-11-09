<template>
  <div class="hello">
    <h1>{{ isMobile }}</h1>
    <h2>Essential Links</h2>
    <el-row>
      <el-button type="danger" plain @click="getLink('pingyao')">平遥古城</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '123'
    }
  },
  methods: {
    getLink (path) {
      let link = ''
      let routeData = this.$router.resolve({path: path})
      link = routeData.href
      window.open(link, '_blank')
    }
  },
  computed: {
    isMobile: function () {
      return this.$store.state.isMobile
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
</style>
