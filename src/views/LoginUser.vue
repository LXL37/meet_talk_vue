<template>
  <div style="color: #fefffe">

    <div class="mainLogin">
      <el-form name='LoginName' :model="loginForm" status-icon :rules="rules" ref="loginForm"
               label-width="80px">
        <el-divider direction="horizontal"></el-divider>
        <el-form-item label="用户名" prop="name">
          <el-input v-model="loginForm.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="code">

          <el-input type="text" auto-complete="off" v-model="loginForm.code" placeholder="点击图片更换验证码"
                    style="width: 100px;margin-right: 5px;float: left"></el-input>
          <el-image :src="captureImg" class="captureImg" style="height: 40px;width: 220px"></el-image>

        </el-form-item>

        <el-form-item>

          <el-button id="loginButton" @click="submitForm('loginForm')">登录</el-button>
        </el-form-item>
      </el-form>

    </div>
  </div>


</template>

<script>
export default {
  name: "LoginUser",
  data() {


    return {
      name: 'Login',
      captureImg: null,

      loginForm: {
        password: '',
        name: '',
        code: '1234',
        token: '',
        captureToken: '',
      },
      myInfo: {},
      rules: {
        name: [
          {required: true, message: '请输入用户名', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'}
        ],

        code: [
          {required: true, message: '请输入验证码', trigger: 'blur'}
        ],
      }

    };
  },
  watch: {
    '$route' (to, from) {
      this.$router.go(0);
    }
  },
  methods: {


    submitForm(formName) {

      this.$store.commit("DELETE_TOKEN")
      this.$refs[formName].validate((valid) => {

        if (valid) {
          this.$axios.post('/login', this.loginForm).then(res => {
            console.log(res)

            if (res.data.code === 200) {

              const jwt = res.data.data.token;
              this.$store.commit("SET_TOKEN", jwt)
              this.myInfo.uId = res.data.data.user.uId
              this.myInfo.avatar = res.data.data.user.avatar
              this.myInfo.name = res.data.data.user.name
              this.myInfo.signature = res.data.data.user.signature
              this.myInfo.privateMode = res.data.data.user.privateMode

              this.$router.push({
                path: '/mainPage',
                query: {
                  myInfo: JSON.stringify(this.myInfo),
                  time:new Date().getTime()
                }
              })
              setTimeout(function () {
                window.location.reload();
              }, 10);
            }


          })


        }
      });
    },

  },
  created() {

  }
}
</script>

<style scoped>


/*用来调整登录窗口内的距离*/
.mainLogin {

}

.el-button {
  color: #e7dede;
}

/*登录按钮*/
#loginButton {
  color: white;
  width: 330px;
  border: solid white 1px;
  height: 40px;
  border-radius: 20px;
  background-color: #3b82f6
}

/*图片验证码*/
.captureImg {

  height: 70px;
  width: 200px;

}


</style>