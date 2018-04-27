<template>
	<div>
		<div><img class='mobileheaderbg' src='../../../../images/liuyan-ban.jpg'></div>
    <Nav navtitle='ONLINE MESSAGE '></Nav>
		<div class='mobilecontact-sketch'>
			<p>Leave your comments and share your experience. </p>
		</div>
		<div class='mobilemessage-content'>
			<div class='mobilemessage-content-w'>
				<form>
					<label for='title' id='title-label'>Title：</label><input type='text' id='title' @blur='titlef' />
					<br />
					<label for='content' id='content-label'>Content：</label><textarea id='content' @blur='contentf'></textarea>
					<br />
					<label for='name' id='name-label'>Name：</label><input type='text' id='name' @blur='namef' />
					<br />
					<label for='telephone' id='telephone-label'>Phone number：</label><input type='text' id='telephone' @blur='telephonef' />
					<br />
          <label for='telephone' id='email-label'>Email：</label><input type='text' id='email' @blur='emailf' />
					<br />
					<button type='button' id='sub' @click='sub'>Send</button>
				</form>
			</div>
		</div>
		<Foot></Foot>
	</div>
</template>

<script>
import Foot from '../../common/footer.vue'
import Nav from '../../common/nav.vue'
export default {
  data () {
    return {
      flag: [false, false, false, false]
    }
  },
  methods: {
    telephonef () {
      let reg = /^1[3|5|7|8]\d{9}$/
      if (reg.test(document.getElementById('telephone').value)) {
        this.flag[3] = true
      } else {
        this.flag[3] = false
      }
    },
    titlef () {
      if (document.getElementById('title').value.trim().length > 0) {
        this.flag[0] = true
      } else {
        this.flag[0] = false
      }
    },
    contentf () {
      if (document.getElementById('content').value.trim().length > 15) {
        this.flag[1] = true
      } else {
        this.flag[1] = false
      }
    },
    namef () {
      if (document.getElementById('name').value.trim().length > 0) {
        this.flag[2] = true
      } else {
        this.flag[2] = false
      }
    },
    emailf () {
      let reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
      if (reg.test(document.getElementById('telephone').value)) {
        this.flag[4] = true
      } else {
        this.flag[4] = false
      }
    },
    sub () {
      if (this.flag[0] && this.flag[2] && this.flag[1] && this.flag[3] && this.flag[4]) {
        if (confirm('Are you sure about the submission')) {
          this.dataif = {
            title: document.getElementById('title').value,
            content: document.getElementById('content').value,
            name: document.getElementById('name').value,
            telephone: document.getElementById('telephone').value,
            email: document.getElementById('email').value,
            cateId: '5a41bf9d17db19233cf3ddcd'
          }

          this.$http
            .post(this.getTest() + '/message/data', this.dataif)
            .then(res => {
              setTimeout(function () {
                document.getElementById('title').value = ''
                document.getElementById('content').value = null
                document.getElementById('name').value = null
                document.getElementById('telephone').value = null
                document.getElementById('email').value = null
                alert('Message successfully')
              }, 500)
            })
        }
      } else {
        if (!this.flag[0]) {
          alert('The title cannot be empty.')
        } else if (!this.flag[1]) {
          alert('The content should not be less than 15 words.')
        } else if (!this.flag[2]) {
          alert('The name cannot be empty.')
        } else if (!this.flag[3]) {
          alert('Please enter the correct phone number.')
        } else if (!this.flag[4]) {
          alert('Please enter the correct mailbox.')
        }
      }
    }
  },
  components: {
    Foot,
    Nav
  }
}
</script>

<style scoped>
p,
h3,
img,
textarea,
input {
  margin: 0;
  padding: 0;
}
.mobileheaderbg{
  width: 100%;
}
.mobilecontact-content {
  width: 100%;
}

.mobilecontact-content-top {
  margin-top: 20px;
  position: relative;
}

.mobilecontact-sketch {
  text-align: center;
  width: 96%;
  padding: 0 2%;
}

.mobilecontact-sketch p {
  color: #7a7a7a;
  margin-top: 20px;
  font-size: 12px;
  text-shadow: 0.2px 0.2px 0.2px #cccccc;
}

.mobilemessage-content-w {
  width: 100%;
  position: relative;
  z-index: 11;
}

#title {
  margin-top: 40px;
}

#title,
#name,
#telephone,
#email {
  height: 30px;
  width: 230px;
  border: 0;
  border: dashed #ee882a 1px;
  margin-bottom: 20px;
  position: relative;
}

#title-label,
#name-label,
#telephone-label,
#email-label {
  font-size: 12px;
  margin-right: 15px;
  text-shadow: 0.2px 0.2px 0.2px #cccccc;
  width: 100px;
  text-align: right;
  display: inline-block;
}

#content {
  height: 50px;
  width: 230px;
  border: 0;
  border: dashed #ee882a 1px;
  margin-bottom: 20px;
  vertical-align: top;
  resize: none;
  box-sizing: border-box;
}

#content-label {
  height: 50px;
  font-size: 12px;
  margin-right: 15px;
  text-shadow: 0.2px 0.2px 0.2px #cccccc;
  margin-top: -200px;
  width: 100px;
  text-align: right;
  display: inline-block;
}

#sub {
  border: 0;
  border: dashed #ee882a 1px;
  height: 30px;
  width: 80px;
  background: #f8efe7;
  margin-left: 30%;
  margin-top: 15px;
  font-size: 14px;
  color: #f1662c;
  text-shadow: 0.2px 0.2px 0.2px #f8efe7;
  cursor: pointer;
}
</style>
