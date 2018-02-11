<template>
<div>
    <div v-if="width>640">
    <div class="wraperwidth" v-if="this.$route.params.content.title">
        <h3 class="title">{{this.$route.params.content.title}}</h3>
        <div class="line"></div>
        <p class="date">{{this.$route.params.content.year}}-{{this.$route.params.content.day}}</p>
        <p class="content">{{this.$route.params.content.content}}</p>
        <img :src="this.$route.params.content.imgurl" class="imgurl">
    </div>
    <div class="wraperwidth" v-if="this.$route.params.content.htitle">
        <h3 class="title">{{this.$route.params.content.htitle}}</h3>
        <div class="line"></div>
        <p class="date">{{this.$route.params.content.hyear}}-{{this.$route.params.content.hday}}</p>
        <p class="content">{{this.$route.params.content.hcontent}}</p>
    </div>
     </div>
        <div v-if="width<=640">
    <div class="mobilewraperwidth" v-if="this.$route.params.content.title">
        <h3 class="mobiletitle">{{this.$route.params.content.title}}</h3>
        <div class="mobileline"></div>
        <p class="mobiledate">{{this.$route.params.content.year}}-{{this.$route.params.content.day}}</p>
        <p class="mobilecontent">{{this.$route.params.content.content}}</p>
        <img :src="this.$route.params.content.imgurl" class="mobileimgurl">
    </div>
    <div class="mobilewraperwidth" v-if="this.$route.params.content.htitle">
        <h3 class="mobiletitle">{{this.$route.params.content.htitle}}</h3>
        <div class="mobileline"></div>
        <p class="mobiledate">{{this.$route.params.content.hyear}}-{{this.$route.params.content.hday}}</p>
        <p class="mobilecontent">{{this.$route.params.content.hcontent}}</p>
    </div>
     </div>
      </div>
</template>

<script>
export default {
  data () {
    return {
      width: 1920
    }
  },
  created () {
    this.width = document.documentElement.offsetWidth
  },
  mounted () {
    window.onresize = () => {
      this.width = document.documentElement.offsetWidth
    }
  }
}
</script>

<style scoped>
.wraperwidth{
    width: 1000px;
    margin: 0 auto;
    padding-bottom: 150px;
}
.title{
    text-align: center;
    color:#ee882a
}
.line{
    border-top:solid 1px #ee882a
}
.date{
    text-align: center;
    font-size: 14px;
    color:gray;
    margin-top: 15px;
}
.content{
    margin-top: 30px;
    text-indent: 2em;
}
.imgurl{
    margin-top: 30px;
    margin-left: 30px;
}
.mobileimgurl{
    width: 100%;
}
.mobilewraperwidth{
    width: 96%;
    padding: 0 2%;
    min-height: 200px;
    font-size: 0;
}
.mobiletitle{
    text-align: center;
    color:#ee882a;
    font-size: 14px;
}
.mobileline{
    border-top:solid 1px #ee882a;
}
.mobiledate{
    text-align: center;
    font-size: 10px;
    color:gray;
    margin-top: 15px;
}
.mobilecontent{
    margin-top: 10px;
    text-indent: 2em;
    font-size: 10px;
}
</style>
