<template>
<div>

  <div class="loginDiv">
    <div style="color: white;font-size: 30px;margin-left: 180px;float: left;margin-top: 70px" >Hello!</div>

    <div class="mBody">
      <div style="height: 20px"></div>
      <div class="mEye"></div>
      <div style="height: 10px"></div>
      <div class="mMouth"></div>
    </div>
    <div class="mBody1">
      <div style="height: 20px"></div>
      <div class="mEye1"></div>
      <div style="height: 10px"></div>
      <div class="mMouth1"></div>
    </div>
    <div class="mBMouth" ></div>
  </div>

  <el-form class="loginContainer"  ref="loginForm"
           label-width="70px">
    <h1 align="center" >Meet</h1>
    <div class="mainLogin">


      <el-menu
          default-active="1"
          class="loginMenu"
      >

        <router-link :to="{name: 'LoginUser'}">
          <el-menu-item    index="1" style="display: inline;margin-left: 100px;font-size: 20px">
            用户名
          </el-menu-item>
        </router-link>
        <router-link :to="{name: 'Register'}">
          <el-menu-item index="2" style="display: inline;margin-left: 100px;font-size: 20px">
           注册
          </el-menu-item>
        </router-link>
      </el-menu>
    </div>
    <router-view></router-view>
  </el-form>
</div>


</template>

<script>


export default {

  name: "Login",
  data() {

  },
  created() {
    this.$router.push('loginUser')

  },


}
</script>

<style scoped>
.loginMenu{
  height: 40px;

}

#registerBtn {
  float: right;
  background-color: white;
  border: 0px white solid;
  font-size: 18px;
}

/*用来调整登录窗口内的距离*/
.mainLogin {
  margin-top: 5px;
}




.mMouth{
  width: 40px;
  height: 10px;
  background-color: white;
  border-radius: 15px;
  margin-left: 60px;
}
.mEye{
  width: 30px;
  height: 30px;
  border-radius: 40px;
  background-color: #5fe5e9;
  border: solid white 15px;
  margin-left: 50px;


}
.mBody{
  float: left;
  width: 150px;
  height: 150px;
  background-color: #f56d11;
  border-radius: 20px;
  margin-left: 240px;
  margin-top: 70px;
 /* animation-name: mBody;*/
  animation-iteration-count:infinite;
  animation-duration:1s;
  position: relative;
}
.mMouth1{
  width: 40px;
  height: 10px;
  background-color: white;
  border-radius: 15px;
  margin-left: 60px;
}
.mEye1{
  width: 30px;
  height: 30px;
  border-radius: 40px;
  background-color: #ae650f;
  border: solid white 15px;
  margin-left: 50px;


}
.mBody1{

  width: 150px;
  height: 150px;
  background-color: #116888;
  border-radius: 20px;
  margin-left: 50px;
  margin-top: 180px;
  /*animation-name: mBody;*/
  animation-iteration-count:infinite;
  animation-duration:1s;
  position: relative;
}
.mBMouth{
  margin-left: 130px;
  margin-top: 20px;
  width: 170px;
  height: 30px;
  background-color: white;
  border-radius: 20px;
}
@keyframes mBody
{
  0%{top: 0px}
  50%{top: 55px}
  100%{top: 0px}
}
.loginDiv{
  height: 530px;
  width: 430px;
   background-color: #3b82f6;
  float: left;
  margin-left: 300px;
  margin-top: 50px;
  border: 1px solid white;
  border-radius: 15px;

}
.loginContainer {

  background-color: white;
  float: left;
  border-radius: 15px;
  background-clip: padding-box;
  height: 500px;
  margin: 50px auto;
  width: 430px;
  padding: 15px 35px 15px 35px;
  border: 1px solid white;
  box-shadow: 0 0 25px #d5d5e0;
}

</style>