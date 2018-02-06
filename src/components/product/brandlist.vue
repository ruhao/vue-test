<template>
	<div>
		<Nav navtitle='合作品牌'></Nav>
	</div>
</template>

<script>
import Nav from '../common/nav.vue'
export default {
  data () {
    return {
      typeone: [],
      content: [],
      fliter: {
        limit: 12,
        page: 1,
        type: ''
      }
    }
  },
  methods: {
    getData () {
      this.$http.post('http://127.0.0.1:3000/brand/list', this.fliter).then(res => {
        this.content.push(res.data.rows)
        console.log(this.content)
      })
    },
    getcontentone () {
      this.fliter.type = '1'
      this.getData()
    },
    getcontenttwo () {
      this.fliter.type = '2'
      this.getData()
    }
  },
  components: {
    Nav
  },
  created () {
    this.getcontentone()
    // this.getcontenttwo()
  }
}
</script>

<style scoped>

</style>
