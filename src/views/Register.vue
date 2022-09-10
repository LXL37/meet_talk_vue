<template>


  <div class="mainLogin">
    <el-form name='LoginName' :model="loginForm" :rules="rules"  status-icon  ref="loginForm"
             label-width="80px">
      <el-divider direction="horizontal"></el-divider>
      <el-form-item label="用户名" prop="name">
        <el-input v-model="loginForm.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button id="loginButton" type="primary" @click="submitForm('loginForm')">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {


    return {
      name: 'Register',


      loginForm: {
        password: '',

        name: '',

      },
      rules: {

        name: [
          {required: true, message: '请输入用户名', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'}
        ],



      }

    };
  },
  methods: {

   /* submitForm(formName) {
      console.log(this.loginForm)
          this.$axios.post('/user/register', this.loginForm).then(res => {
            if (res.data.code!==200) {
              this.$message({
                showClose: true,
                message: res.data.msg,
                type: 'error'
              });
            }else {
              this.$message({

                showClose: true,
                message: '注册成功',
                type: 'success'
              });
              this.$router.push("/loginUser")
            }



          })

    },*/
    submitForm(formName) {
      console.log(this.loginForm)
      this.$axios.post('/register', this.loginForm).then(res => {
        console.log(res.data)
        if (res.data.code!==200) {
          this.$message({
            showClose: true,
            message: res.data.msg,
            type: 'error'
          });
        }else {
          this.$message({

            showClose: true,
            message: '注册成功',
            type: 'success'
          });

        }
        this.$router.push("/loginUser")


      })

    },
  },
  created() {

  }

}
</script>

<style scoped>

#loginButton {
  width: 330px;
  border: solid white 1px;
  height: 40px;
  border-radius: 20px;
  background-color: #3b82f6
}

#registerBtn {
  float: right;
  background-color: white;
  border: 0px white solid;
  font-size: 18px;
}
</style>