<template>
	<div>
		<Nav navtitle="人才培训"></Nav>
		<div class="midtraincontent">
			<p class="midtraincontent-title">内部培训</p>
			<p class="midtraincontent-tcontent">培训体系是集团人才培养体系的重要组成部分，也是优秀的声誉体系之一。在培训模式上，该组采用混合培训，包括在职培训、课堂培训、在线培训、远程培训等。在职培训是最重要的组成部分之一，包括直接经理制、导师制等。</p>
			<div v-for="(item,index) in this.fliter.data6" :key=index>
				<p class="midtraindetail-title">训练</p>
				<p class="midtraindetail-title">{{item.edpattern}}</p>
				<p class="midtraincontent-tcontent">{{item.edcontent}}</p>
				<div class="midtraindetail-content">
					<img :src="item.edimgurl">
					<img :src="item.edimgurl1">
				</div>
			</div>
			<p class="midtraincontent-bottom">
				作为激励机制的重要组成部分，集团具有很强的薪酬体系和员工福利。在某种程度上，一组工作人员举行了许多其他公司没有办法提供“选择权的工作方式，可选择是否执行弹性系统，包括工作时间的自由选择和自由决定是否参加员工持股计划，选择在家里一天的工作自由。
			</p>
		</div>
	</div>
</template>

<script>
import Nav from '../../common/nav.vue'
export default {
  data () {
    return {
      information: '',
      fliter: {
        data6: [],
        type: '2',
        limit: 2
      }
    }
  },
  components: {
    Nav
  },
  created () {
    this.$http.post('http://120.79.22.222:3000/hr/list', this.fliter).then(res => {
      this.fliter.data6 = res.data.rows
      this.information = res.data.rows[0].edreson
    })
  }
}
</script>

<style scoped>
p {
  margin: 0;
  padding: 0;
}
.midtraincontent {
  width: 96%;
  margin: 30px auto 0;
  padding:0 2%;
}
.midtraincontent-title {
  color: #666666;
  font-size: 14px;
  text-shadow: 0.2px 0.2px 0.2px #666666;
}
.midtraincontent-tcontent {
  margin-top: 10px;
  font-size: 10px;
  color: #666666;
  text-indent: 2em;
}
.midtraindetail-title {
  color: #666666;
  font-size: 14px;
  margin-top: 10px;
}
.midtraindetail-content {
  margin-top: 20px;
  display: flex;
}
.midtraindetail-content img{
  width: 100%;
  height: 200px;
}
.midtraincontent-bottom {
  margin-top: 45px;
    margin-top: 10px;
  font-size: 10px;
  text-indent: 2em;
}
</style>
