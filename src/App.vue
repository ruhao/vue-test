<template>
  <div id="app">
    <img src="./assets/logo.png">
    <button @click="getData">click</button>
    <p v-for='(item,index) in list' :key=index>
       {{ item.reg }}
    </p>
    <router-link to="/Text">9999</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      data: {
        reg: 'lanqiao',
        password: 'laowaicang',
        workarea: 'news'
      },
      list: []
    }
  },
  methods: {
    getData () {
      this.$http.post('http://120.79.22.222:3000/admin/data', this.data).then(res => {
      })
    },
    getList () {
      this.$http.get('http://120.79.22.222:3000/admin/data').then(res => {
        this.list = res.data
        console.log(this.list)
      })
    }
  },
  created () {
    this.getList()
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
