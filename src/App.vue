<template>
  <div id="app">
    <img src="./assets/logo.png">
    <button @click="getData">click</button>
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
      }
    }
  },
  methods: {
    getData () {
      this.$http.post('http://localhost:3000/admin/data', this.data).then(res => {
        console.log(res)
      })
    }
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
