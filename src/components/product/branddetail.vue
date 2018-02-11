<template>
<div>
	<div v-if="width<1500&&width>640">
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
    <div v-if="width>=1500">
        <Nav navtitle='品牌商家'></Nav>
        <div class="midwraperwidth">
            <div class="midbox">
                <img :src="content.imgurl"><span></span>
            </div>
            <div class="midbox1">
               <p class="midtitle">
                   意大利品牌 {{content.name}}
               </p>
               <p class="midcontent">
                   {{content.detail}}
               </p>
            </div>
        </div>
            <Nav navtitle='经典单品' v-if="relation.length"></Nav>
            <div class="midwraperwidth">
                <div v-for="(item,index) in relation" :key=index class="midbox2">
                    <img :src="item.imgurl">
                </div>
            </div>
	</div>
    <div v-if="width<=640">
        <Nav navtitle='品牌商家'></Nav>
        <div class="mobilewraperwidth">
            <div class="mobilebox">
                <img :src="content.imgurl"><span></span>
            </div>
            <div class="mobilebox1">
               <p class="mobiletitle">
                   意大利品牌 {{content.name}}
               </p>
               <p class="mobilecontent">
                   {{content.detail}}
               </p>
            </div>
        </div>
            <Nav navtitle='经典单品' v-if="relation.length"></Nav>
            <div class="mobilewraperwidth">
                <div v-for="(item,index) in relation" :key=index class="mobilebox2">
                    <router-link :to="{name:'productdetail',params:{content:{content:item,navname:cidsec1,relative:id}}}">
                    <img :src="item.imgurl">
                    </router-link>
                    <!-- {{item.name}} -->
                </div>
                <div style="clear:both"></div>
            </div>
	</div>
</div>
</template>

<script>
import Nav from '../common/nav.vue'

export default {
  data () {
    return {
      width: 1920,
      content: {},
      relation: [],
      id: '',
      cidsec1: '',
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
    this.width = document.documentElement.offsetWidth
    this.$http
      .get('http://120.79.22.222:3000/brand/data/' + this.$route.params.id)
      .then(res => {
        this.content = res.data
        this.fliter.belong = res.data.name
        this.$http
          .post('http://120.79.22.222:3000/products/list', this.fliter)
          .then(res => {
            this.relation = res.data.rows
            this.fliter.type = res.data.rows.type
            this.$http.get('http://120.79.22.222:3000/kind/data').then(res => {
              let rr = res.data[0].children[5].children.length
              for (let i = 0; i < rr; i++) {
                if (this.fliter.type === res.data[0].children[5].children[i].type) {
                  this.id = res.data[0].children[5].children[i]._id
                  this.cidsec1 = res.data[0].children[5].children[i].text
                }
              }
            })
          })
      })
  },
  mounted () {
    window.onresize = () => {
      this.width = document.documentElement.offsetWidth
    }
  }
}
</script>

<style scoped>
.margintop50{
    margin-top:50px;
}
.wraperwidth{
    width: 1000px;
    margin: 50px auto 0;
    display: flex;
    padding-bottom: 50px;
}
.wraperwidth:nth-of-type(4){
    padding-bottom:0
}
.box{
    width:500px;
    border: #dad8d6 1px solid;
    height: 250px;
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
     width: 500px;
     height: 250px;
     box-sizing: border-box;
 }
.box img{
    width: 495px;
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
    width: 240px;
    border: #dad8d6 1px solid;
    height: 240px;
    margin-right:10px;
}
.box2 img{
    width: 240px;
}
.midmargintop50{
    margin-top:50px;
}
.midwraperwidth{
    width: 1420px;
    margin: 50px auto 0;
    display: flex;
    padding-bottom: 50px;
}
.midwraperwidth:nth-of-type(4){
    padding-bottom:0
}
.midbox{
    width:700px;
    border: #dad8d6 1px solid;
    height: 360px;
    position: relative;
    text-align:center;
    box-sizing: border-box;
}
.midbox span{
 display:inline-block;
 height:100%;
 vertical-align:middle;
 }
 .midbox1{
     background: #f8efe7;
     width: 700px;
     height: 360px;
     box-sizing: border-box;
 }
.midbox img{
    width: 600px;
    margin: auto;
    vertical-align:middle;
}
.midtitle{
    margin-left: 45px;
    font-size: 24px;
    margin-top: 50px;
    color: #ef9643;
}
.midcontent{
    margin: 60px 45px 0;
    line-height: 20px;
    letter-spacing: 1px;
    font-size: 14px;
}
.midbox2{
    width: 330px;
    border: #dad8d6 1px solid;
    height: 330px;
    margin-right:20px;
}
.midbox2 img{
    width: 330px;
}
.mobilemargintop50{
    margin-top:50px;
}
.mobilewraperwidth{
    width: 100%;
    margin: 10px auto 0;
    padding-bottom: 20px;
}
.mobilewraperwidth:nth-of-type(4){
    padding-bottom:0
}
.mobilebox{
    width:96%;
    border: #dad8d6 1px solid;
    height: 160px;
    padding-top:20px;
    position: relative;
    text-align:center;
    box-sizing: border-box;
    margin: 0 2%;
}
.mobilebox span{
 display:inline-block;
 height:100%;
 vertical-align:middle;
 }
 .mobilebox1{
     background: #f8efe7;
     width:96%;
     height: 200px;
     box-sizing: border-box;
     overflow: hidden;
     margin: 0 2%;
 }
.mobilebox img{
    width: 90%;
    margin: 0 5%
}
.mobiletitle{
    margin-left: 15px;
    font-size: 16px;
    margin-top: 10px;
    color: #ef9643;
}
.mobilecontent{
    margin: 15px 15px 0;
    line-height: 20px;
    letter-spacing: 1px;
    font-size: 12px;
}
.mobilebox2{
    width: 45%;
    margin: 0 2%;
    font-size: 0;
    float: left;
}
.mobilebox2 img{
    width: 100%;
}
</style>
