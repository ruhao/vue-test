<template>
	<div>
        <Nav navtitle='品牌商家'></Nav>
        <div class="wraperwidth">
            <div class="box">
                <img :src="content.imgurl"><span></span>
            </div>
            <div class="box1">
               <p class="title">
                   意大利品牌 {{content.name}}
               </p>
               <p class="content">
                   {{content.detail}}
               </p>
            </div>
        </div>
            <Nav navtitle='经典单品' v-if="relation.length"></Nav>
            <div class="wraperwidth">
                <div v-for="(item,index) in relation" :key=index class="box2">
                    <img :src="item.imgurl">
                </div>
            </div>
	</div>
</template>

<script>
import Nav from '../common/nav.vue'

export default {
  data () {
    return {
      content: {},
      relation: [],
      fliter: {
        limit: 4,
        page: 1,
        type: '',
        belong: ''
      }
    }
  },
  components: {
    Nav
  },
  created () {
    this.$http
      .get('http://120.79.22.222:3000/brand/data/' + this.$route.params.id)
      .then(res => {
        this.content = res.data
        this.fliter.belong = res.data.name
        this.$http
          .post('http://120.79.22.222:3000/products/list', this.fliter)
          .then(res => {
            this.relation = res.data.rows
          })
      })
  }
}
</script>

<style scoped>
.margintop50{
    margin-top:50px;
}
.wraperwidth{
    width: 1420px;
    margin: 50px auto 0;
    display: flex;
    padding-bottom: 50px;
}
.wraperwidth:nth-of-type(4){
    padding-bottom:0
}
.box{
    width:700px;
    border: #dad8d6 1px solid;
    height: 360px;
    position: relative;
    text-align:center;
    box-sizing: border-box;
}
.box span{
 display:inline-block;
 height:100%;
 vertical-align:middle;
 }
 .box1{
     background: #f8efe7;
     width: 700px;
     height: 360px;
     box-sizing: border-box;
 }
.box img{
    width: 600px;
    margin: auto;
    vertical-align:middle;
}
.title{
    margin-left: 45px;
    font-size: 24px;
    margin-top: 50px;
    color: #ef9643;
}
.content{
    margin: 60px 45px 0;
    line-height: 20px;
    letter-spacing: 1px;
    font-size: 14px;
}
.box2{
    width: 330px;
    border: #dad8d6 1px solid;
    height: 330px;
    margin-right:20px;
}
.box2 img{
    width: 330px;
}
</style>
