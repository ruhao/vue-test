<template>
	<div>
    <div class='wrapwidth'>所有品牌均按首字母顺序排列</div>
    <div class="wraperwidth" v-for="(item,index) in typeone" :key=index>
      <div v-if="flag[index]==='true'">
      <p class="letter">{{title[index]}}</p>
      <ul>
        <li v-for="(it,ind) in content[index]" :key=ind class="brandlist">
          <router-link :to="'/brand/branddetail/'+it._id" class="fontstyle">
          <div class="brandcontent"><img :src="it.imgurl"></div>
          <div class="brandcontent1"><p>{{it.name}}</P></div>
          </router-link>
        </li>
      </ul>
       <div class="wrapmore" v-if="content[index].length <= 12">
        <i class="more" @click="getmore(index)">more+ </i>
       </div>
        <div class="wrapmore" v-else>
        <div class="twobutton">
          <i class="more" @click="getmore(index)">more+ </i>
          <i class="more" @click="getless(index)">less- </i>
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
      typeone: ['1', '2', '3', '4', '5'],
      title: ['A ~ G', 'H ~ N', 'O ~ T', 'U ~ Z', 'U ~ Z', '其 他'],
      flag: [],
      content: [],
      fliter: {
        limit: 12,
        page: 1,
        type: ''
      }
    }
  },
  methods: {
    getData (index) {
      this.fliter.type = this.typeone[index]
      this.$http.post('http://120.79.22.222:3000/brand/list', this.fliter).then(res => {
        this.content.push(res.data.rows)
        if (res.data.rows.length > 0) {
          this.flag.push('true')
        } else {
          this.flag.push('flase')
        }
        if (Number(this.typeone[index]) < 5) {
          this.getData(index + 1)
        }
      })
    },
    getmore (index) {
      this.fliter.limit = this.fliter.limit + 12
      this.fliter.type = this.typeone[index]
      this.$http.post('http://120.79.22.222:3000/brand/list', this.fliter).then(res => {
        this.content[index] = res.data.rows
        this.flag.push('flase')
      })
    },
    getless (index) {
      this.fliter.limit = 12
      this.fliter.type = this.typeone[index]
      this.$http.post('http://120.79.22.222:3000/brand/list', this.fliter).then(res => {
        this.content[index] = res.data.rows
        this.flag.push('flase')
      })
    }
  },
  components: {
    Nav
  },
  created () {
    this.getData(0)
  }
}
</script>

<style scoped>
.wrapwidth{
  width: 1420px;
  margin-top: 20px;
  text-align: center;
  text-shadow: 0.3px 0.3px 0.3px black;
}
.wraperwidth{
  width: 1420px;
  margin-top: 70px;
}
.letter{
  text-align: center;
  font-size: 18px;
  color:#ee882a;
}
ul{
  list-style: none;
  overflow: hidden;
}
.brandlist{
  float: left;
  width: 200px;
  margin-right:20px;
  margin-bottom: 20px;
  z-index: 10;
  position: relative;
}
.brandcontent{
  width:200px;
  border: 1px #cccccc solid;
  border-bottom: 0;
  text-align: center;
  padding: 15px 0;
  cursor: pointer;
}
brandcontent img{
  max-width: 200px;
}
.brandcontent1{
  cursor: pointer;
  color: black;
  width:200px;
  border: 1px #cccccc solid;
  text-align: center;
  height: 40px;
}
.fontstyle{
 text-decoration: none;
}
.wrapmore{
  text-align: center;
}
.twobutton{
  width: 160px;
  margin: 0 auto;
  display: flex;
}
.more{
  width: 80px;
  height: 40px;
  line-height: 40px;
  border-radius: 20px;
  background: #f9f1e9;
  font-style: normal;
  cursor: pointer;
  display: block;
  color:#ee882a;
  margin: 20px auto 0;
}
</style>
