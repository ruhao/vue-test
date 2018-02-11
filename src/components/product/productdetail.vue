<template>
<div>
	<div v-if="width<1500&&width>640">
		<Nav :navtitle="cidsec2"></Nav>
		<div class="wraperwidth">
			<div class="pdetail-left">
				<div v-if="this.detail.title">
					<p class="pdetail-leftp1">{{this.detail.title}}</p>
					<p class="pdetail-leftp2" v-for="(item,index) in this.firsttitle" :key=index>{{item}}</p>
				</div>
				<div v-if="this.detail.title1">
					<p class="pdetail-leftp1">{{this.detail.title1}}</p>
					<p class="pdetail-leftp2" v-for="(item,index) in this.secondtitle" :key=index>{{item}}</p>
				</div>
				<div v-if="this.detail.title2">
					<p class="pdetail-leftp1">{{this.detail.title2}}</p>
					<p class="pdetail-leftp2" v-for="(item,index) in this.thirdtitle" :key=index>{{item}}</p>
				</div>
				<div v-if="this.detail.imgurl" class="imgsize">
					<img :src="this.detail.imgurl" />
				</div>
				<div v-if="this.detail.introduction">
					<p class="pdetail-leftp2" v-for="(item,index) in this.introduction" :key=index>{{item}}</p>
				</div>
				<div v-if="this.detail.name">
					<p class="pdetail-leftp3"><span class="pdetail-leftspan">商品名称:</span>&nbsp;&nbsp;&nbsp;&nbsp;{{this.detail.name}}</p>
				</div>
				<div v-if="this.detail.describe">
					<p class="pdetail-leftp3"><span class="pdetail-leftspan">产品描述:</span>&nbsp;&nbsp;&nbsp;&nbsp;{{this.detail.describe}}</p>
				</div>
				<div v-if="this.detail.origin">
					<p class="pdetail-leftp3"><span class="pdetail-leftspan">原产地:</span>&nbsp;&nbsp;&nbsp;&nbsp;{{this.detail.origin}}</p>
				</div>
				<div v-if="this.detail.ingredient">
					<p class="pdetail-leftp3"><span class="pdetail-leftspan">产品材料:</span>&nbsp;&nbsp;&nbsp;&nbsp;{{this.detail.ingredient}}</p>
				</div>
				<div v-if="this.detail.expiration">
					<p class="pdetail-leftp3"><span class="pdetail-leftspan">保质期:</span>&nbsp;&nbsp;&nbsp;&nbsp;{{this.detail.expiration}}</p>
				</div>
				<div v-if="this.detail.storaged">
					<p class="pdetail-leftp3"><span class="pdetail-leftspan">储存方法:</span>&nbsp;&nbsp;&nbsp;&nbsp;{{this.detail.storaged}}</p>
				</div>
				<div v-if="this.detail.match">
					<p class="pdetail-leftp3"><span class="pdetail-leftspan">产品搭配:</span>&nbsp;&nbsp;&nbsp;&nbsp;{{this.detail.match}}</p>
				</div>
			</div>
			<div class="pdetail-right smwidth">
				<p class="pdetail-rightp1">产品推荐</p>
				<div v-for="(item,index) in relatived" :key=index class="serverbox" @mouseenter="moveup(item.num)" @mouseleave="movedown(item.num)">
					<router-link :to="{name:'productdetail',params:{content:{content:item,navname:'this.$route.params.content.navname',relative:'this.$route.params.content.relative'}}}">
						<div class="serverbox1 productimg"><img :src="item.imgurl"></div>
					</router-link>
					<router-link :to="{name:'productdetail',params:{content:{content:item,navname:'this.$route.params.content.navname',relative:'this.$route.params.content.relative'}}}">
						<div class="serverbox2 productimg" @click="changepage(item.num)">
							<img src="../../../images/products2-1.jpg">
							<p class="prolist">
								{{item.name}}
							</p>
						</div>
					</router-link>
				</div>
         <div v-if="relatived.length<1" class="jingqingqidai">
          敬请期待
				</div>
			</div>
		</div>
	</div>
  <div v-if="width>=1500">
		<Nav :navtitle="this.$route.params.content.navname"></Nav>
		<div class="wraperwidth">
			<div class="pdetail-left">
				<div v-if="this.detail.title">
					<p class="pdetail-leftp1">{{this.detail.title}}</p>
					<p class="pdetail-leftp2" v-for="(item,index) in this.firsttitle" :key=index>{{item}}</p>
				</div>
				<div v-if="this.detail.title1">
					<p class="pdetail-leftp1">{{this.detail.title1}}</p>
					<p class="pdetail-leftp2" v-for="(item,index) in this.secondtitle" :key=index>{{item}}</p>
				</div>
				<div v-if="this.detail.title2">
					<p class="pdetail-leftp1">{{this.detail.title2}}</p>
					<p class="pdetail-leftp2" v-for="(item,index) in this.thirdtitle" :key=index>{{item}}</p>
				</div>
				<div v-if="this.detail.imgurl" class="midimgsize">
					<img :src="this.detail.imgurl" />
				</div>
				<div v-if="this.detail.introduction">
					<p class="pdetail-leftp2" v-for="(item,index) in this.introduction" :key=index>{{item}}</p>
				</div>
				<div v-if="this.detail.name">
					<p class="pdetail-leftp3"><span class="pdetail-leftspan">商品名称:</span>&nbsp;&nbsp;&nbsp;&nbsp;{{this.detail.name}}</p>
				</div>
				<div v-if="this.detail.describe">
					<p class="pdetail-leftp3"><span class="pdetail-leftspan">产品描述:</span>&nbsp;&nbsp;&nbsp;&nbsp;{{this.detail.describe}}</p>
				</div>
				<div v-if="this.detail.origin">
					<p class="pdetail-leftp3"><span class="pdetail-leftspan">原产地:</span>&nbsp;&nbsp;&nbsp;&nbsp;{{this.detail.origin}}</p>
				</div>
				<div v-if="this.detail.ingredient">
					<p class="pdetail-leftp3"><span class="pdetail-leftspan">产品材料:</span>&nbsp;&nbsp;&nbsp;&nbsp;{{this.detail.ingredient}}</p>
				</div>
				<div v-if="this.detail.expiration">
					<p class="pdetail-leftp3"><span class="pdetail-leftspan">保质期:</span>&nbsp;&nbsp;&nbsp;&nbsp;{{this.detail.expiration}}</p>
				</div>
				<div v-if="this.detail.storaged">
					<p class="pdetail-leftp3"><span class="pdetail-leftspan">储存方法:</span>&nbsp;&nbsp;&nbsp;&nbsp;{{this.detail.storaged}}</p>
				</div>
				<div v-if="this.detail.match">
					<p class="pdetail-leftp3"><span class="pdetail-leftspan">产品搭配:</span>&nbsp;&nbsp;&nbsp;&nbsp;{{this.detail.match}}</p>
				</div>
			</div>
			<div class="pdetail-right">
				<p class="pdetail-rightp1">产品推荐</p>
				<div v-for="(item,index) in relatived" :key=index class="serverbox" @mouseenter="moveup(item.num)" @mouseleave="movedown(item.num)">
					<router-link :to="{name:'productdetail',params:{content:{content:item,navname:'this.$route.params.content.navname',relative:'this.$route.params.content.relative'}}}">
						<div class="serverbox1"><img :src="item.imgurl"></div>
					</router-link>
					<router-link :to="{name:'productdetail',params:{content:{content:item,navname:'this.$route.params.content.navname',relative:'this.$route.params.content.relative'}}}">
						<div class="serverbox2" @click="changepage(item.num)">
							<img src="../../../images/products2-1.jpg">
							<p class="prolist">
								{{item.name}}
							</p>
						</div>
					</router-link>
				</div>
         <div v-if="relatived.length<1" class="jingqingqidai">
          敬请期待
				</div>
			</div>
		</div>
	</div>
  <div v-if="width<=640">
		<Nav :navtitle="this.$route.params.content.navname"></Nav>

		<div class="mobilewraperwidth">
			<div class="mobilepdetail-left">
				<div v-if="this.detail.title">
					<p class="mobilepdetail-leftp1">{{this.detail.title}}</p>
					<p class="mobilepdetail-leftp2" v-for="(item,index) in this.firsttitle" :key=index>{{item}}</p>
				</div>
				<div v-if="this.detail.title1">
					<p class="mobilepdetail-leftp1">{{this.detail.title1}}</p>
					<p class="mobilepdetail-leftp2" v-for="(item,index) in this.secondtitle" :key=index>{{item}}</p>
				</div>
				<div v-if="this.detail.title2">
					<p class="mobilepdetail-leftp1">{{this.detail.title2}}</p>
					<p class="mobilepdetail-leftp2" v-for="(item,index) in this.thirdtitle" :key=index>{{item}}</p>
				</div>
				<div v-if="this.detail.imgurl" class="mobileimgsize">
					<img :src="this.detail.imgurl" />
				</div>
				<div v-if="this.detail.introduction">
					<p class="mobilepdetail-leftp2" v-for="(item,index) in this.introduction" :key=index>{{item}}</p>
				</div>
				<div v-if="this.detail.name">
					<p class="mobilepdetail-leftp3"><span class="mobilepdetail-leftspan">商品名称:</span>&nbsp;&nbsp;&nbsp;&nbsp;{{this.detail.name}}</p>
				</div>
				<div v-if="this.detail.describe">
					<p class="mobilepdetail-leftp3"><span class="mobilepdetail-leftspan">产品描述:</span>&nbsp;&nbsp;&nbsp;&nbsp;{{this.detail.describe}}</p>
				</div>
				<div v-if="this.detail.origin">
					<p class="mobilepdetail-leftp3"><span class="mobilepdetail-leftspan">原产地:</span>&nbsp;&nbsp;&nbsp;&nbsp;{{this.detail.origin}}</p>
				</div>
				<div v-if="this.detail.ingredient">
					<p class="mobilepdetail-leftp3"><span class="mobilepdetail-leftspan">产品材料:</span>&nbsp;&nbsp;&nbsp;&nbsp;{{this.detail.ingredient}}</p>
				</div>
				<div v-if="this.detail.expiration">
					<p class="mobilepdetail-leftp3"><span class="mobilepdetail-leftspan">保质期:</span>&nbsp;&nbsp;&nbsp;&nbsp;{{this.detail.expiration}}</p>
				</div>
				<div v-if="this.detail.storaged">
					<p class="mobilepdetail-leftp3"><span class="mobilepdetail-leftspan">储存方法:</span>&nbsp;&nbsp;&nbsp;&nbsp;{{this.detail.storaged}}</p>
				</div>
				<div v-if="this.detail.match">
					<p class="mobilepdetail-leftp3"><span class="mobilepdetail-leftspan">产品搭配:</span>&nbsp;&nbsp;&nbsp;&nbsp;{{this.detail.match}}</p>
				</div>
			</div>
			<div class="mobilepdetail-right">
				<p class="mobilepdetail-rightp1">产品推荐</p>
				<div v-if="relatived.length>0" v-for="(item,index) in relatived" :key=index class="mobileserverbox">
          <div class="mobileserverbox1">
          <img :src="item.imgurl" @click="changcontent(item,reid)">
          </div>
				</div>
        <div v-if="relatived.length<1" class="jingqingqidai">
          敬请期待
				</div>
			</div>
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
      detail: {},
      firsttitle: [],
      secondtitle: [],
      thirdtitle: [],
      introduction: [],
      cidsec1: '',
      reid: '',
      relative: [],
      cidsec2: '',
      x: '',
      y: '',
      id: '',
      relatived: [],
      tempdata: [],
      fliter: {
        data6: [],
        limit: 50,
        page: 1,
        cateId: []
      }
    }
  },
  methods: {
    getdetail (data) {
      let object1 = data.split('&&')
      this.firsttitle = object1
    },
    getdetail1 (data) {
      let object1 = data.split('&&')
      this.secondtitle = object1
    },
    getdetail2 (data) {
      let object1 = data.split('&&')
      this.thirdtitle = object1
    },
    getdetail3 (data) {
      let object1 = data.split('&&')
      this.introduction = object1
    },
    getlist (data) {
      this.$http.get('http://120.79.22.222:3000/kind/data').then(res => {
        this.getcid(res.data[0].children[5].children, data)
        this.getData()
      })
    },
    getcid (data, id) {
      let ii = data.length
      for (let i = 0; i < ii; i++) {
        if (data[i]._id === id) {
          this.tempdata = data[i]
          this.getlistcid(this.tempdata)
          return
        } else {
          if (data[i].children) {
            this.getcid(data[i].children, id)
          }
        }
      }
    },
    // 获取id数组与数据库进行交互
    getlistcid (data) {
      if (data.children) {
        let ll = data.children.length
        for (let i = 0; i < ll; i++) {
          this.getlistcid(data.children[i])
        }
      } else {
        this.fliter.cateId.push(data._id)
      }
    },
    changcontent (value, value2) {
      console.log(value)
      this.detail = value
      this.getlist(value2)
      if (this.detail.content) {
        this.getdetail(this.detail.content)
      }
      if (this.detail.content1) {
        this.getdetail1(this.detail.content1)
      }
      if (this.detail.content2) {
        this.getdetail(this.detail.content2)
      }
      if (this.detail.introduction) {
        this.getdetail3(this.detail.introduction)
      }
    },
    moveup (value) {
      document.getElementsByClassName('serverbox2')[value].id = 'activet'
    },
    movedown (value) {
      document.getElementsByClassName('serverbox2')[value].id = ''
    },
    randomre (data) {
      let uu = data.length
      if (uu > 0) {
        this.x = parseInt(Math.random() * uu)
        this.randomrem(this.x, uu)
      } else {
        this.x = 0
      }
    },
    randomrem (x, uu) {
      this.y = parseInt(Math.random() * uu)
      if (this.x === this.y) {
        this.randomrem(this.x, uu)
      }
    },
    changepage (index) {
      this.detail = this.relatived[index]
      this.getData()
    },
    getData () {
      this.$http.post('http://120.79.22.222:3000/products/list', this.fliter)
        .then(res => {
          // 获取数据
          this.relatived = []
          let uu = res.data.rows.length
          if (uu > 0) {
            this.randomre(res.data.rows)
            res.data.rows[this.x].num = 0
            res.data.rows[this.y].num = 1
            this.relatived.push(res.data.rows[this.x])
            this.relatived.push(res.data.rows[this.y])
          } else {
            this.randomre(res.data.rows)
            res.data.rows[this.x].num = 0
            this.relatived.push(res.data.rows[this.x])
          }
        })
    }
  },
  components: {
    Nav
  },
  created () {
    this.width = document.documentElement.offsetWidth
    this.cidsec2 = this.$route.params.content.navname
    if (this.cidsec2 === '可选分类') {
      this.cidsec2 = '产品详情'
    }
    this.detail = this.$route.params.content.content
    this.getlist(this.$route.params.content.relative)
    this.reid = this.$route.params.content.relative
    if (this.detail.content) {
      this.getdetail(this.detail.content)
    }
    if (this.detail.content1) {
      this.getdetail1(this.detail.content1)
    }
    if (this.detail.content2) {
      this.getdetail(this.detail.content2)
    }
    if (this.detail.introduction) {
      this.getdetail3(this.detail.introduction)
    }
  },
  mounted () {
    window.onresize = () => {
      this.width = document.documentElement.offsetWidth
    }
  }
}
</script>

<style scoped>
.wraperwidth {
  width: 1000px;
  margin: 50px auto 0;
  display: flex;
}

.pdetail-left {
  width: 700px;
  padding: 0 20px;
}

.pdetail-right {
  flex: 1;
  border-top: 3px solid #ee882a;
}

.pdetail-leftp1 {
  font-size: 18px;
  font-weight: bold;
  color: #464c5b;
}

.pdetail-leftp2 {
  margin-top: 10px;
  font-size: 14px;
  font-weight: 600;
  color: #464c5b;
}

.pdetail-leftp3 {
  margin-top: 10px;
  font-size: 16px;
  font-weight: 600;
  color: #464c5b;
}

.pdetail-leftspan {
  font-size: 18px;
  font-weight: bold;
  color: #464c5b;
}

.imgsize {
  margin: 30px;
  width: 245px;
  height: 245px;
  text-align: center;
}
.imgsize img{
  width: 100%;
}
.pdetail-rightp1 {
  margin-top: 20px;
  line-height: 30px;
  color: #ee882a;
  font-size: 16px;
  font-weight: 600;
}

.serverbox {
  width: 338px;
  position: relative;
  height: 338px;
  cursor: pointer;
  overflow: hidden;
  z-index: 11;
  margin-top: 30px;
}

.serverbox1 {
  position: absolute;
  top: 0px;
  left: 0px;
}

.serverbox1 img {
  width: 100%;
  height: 100%;
}

.serverbox2 {
  position: absolute;
  top: 338px;
  left: 0px;
  background: #f9f1e9;
  width: 338px;
  height: 338px;
  opacity: 0;
  transition: all 0.5s;
  text-align: center;
}

.serverbox2 img {
  margin-top: 20px;
  width: 120px;
}

.prolist {
  margin-top: 50px;
  color: #ee882a;
}
.productimg{
  width: 245px;
  height: 245px;
}
.smwidth{
  width: 245px;
}
#activet {
  top: 0px;
  opacity: 0.8;
}
.mobilewraperwidth {
  width: 100%;
  margin: 10px auto 0;
  display: flex;
}

.mobilepdetail-left {
  width: 66%;
  padding: 0 2%;
}

.mobilepdetail-right {
  width: 26%;
  border-top: 3px solid #ee882a;
  padding: 0 2%;
  position: relative;
}

.mobilepdetail-leftp1 {
  font-size: 14px;
  font-weight: bold;
  color: #464c5b;
}

.mobilepdetail-leftp2 {
  margin-top: 10px;
  font-size: 10px;
  color: #464c5b;
}

.mobilepdetail-leftp3 {
  margin-top: 10px;
  font-size: 10px;
  color: #464c5b;
}

.mobilepdetail-leftspan {
  font-size: 14px;
  font-weight: 600;
  color: #464c5b;
}

.mobileimgsize {
  margin: 10px;
  text-align: center;
  width: 50%;
}
.mobileimgsize img{
  width: 100%;
}
.mobilepdetail-rightp1 {
  margin-top: 10px;
  line-height: 25px;
  color: #ee882a;
  font-size: 14px;
  font-weight: 600;
}
.mobileserverbox {
  width: 100%;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  margin-top: 30px;
}
.jingqingqidai{
  color: #ee882a;
  font-weight: 600;
  margin-top: 50px;
}
.mobileserverbox1 {
  position: relative;
  top: 0px;
  left: 0px;
  font-size: 0;
}

.mobileserverbox1 img {
  width: 100%;
  height: 100%;
}
.mobileprolist {
  margin-top: 50px;
  color: #ee882a;
}
.wantjump{
  display: block;
  position: relative;
}
</style>
