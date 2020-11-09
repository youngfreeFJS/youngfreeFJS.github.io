<template>
  <div class="hello">
    <el-row :gutter="24">
      <el-col v-if="isMobile" >
        <el-card shadow="always" >
          asdasdasdasd
        </el-card>
      </el-col>
      <el-col v-else :span="12" :offset="6">
        <el-card shadow="always" >
          sdsdsdsd
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld2',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App222222222222'
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

</style>
