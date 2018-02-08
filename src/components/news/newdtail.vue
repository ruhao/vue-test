<template>
    <div>
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
</template>

<script>
export default {
  created () {
    console.log(this.$route.params.content)
  }
}
</script>

<style scoped>
.wraperwidth{
    width: 1280px;
    margin: 0 auto;
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
</style>
