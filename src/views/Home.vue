<template>
  <div id="night">


    <div id="left">

      <div class="leftPage">
        <div>
          <img class="icon" src="https://cdn2.iconfinder.com/data/icons/flat-pack-1/64/Messages_2-128.png"/>
          <div style="color:#3b82f6;float: right;margin-top: 10px;margin-left: 2px;font-size: 30px;margin-right: 80px">
            MEET
          </div>
        </div>
        <div style="height: 90px"></div>


        <div class="menu">
          <el-menu style="border-radius: 5px;height: 500px" active-text-color=" #409EFF" background-color="white"
                   mode="horizontal" unique-opened="true" text-color="black" default-active="1">
            <router-link class="leftMenu" :to="{name: 'MainPage',query:{myInfo:this.$route.query.myInfo}}">
              <el-menu-item index="1" style="font-size: 20px;border-radius: 5px">
               <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18V42H39V18L24 6L9 18Z" fill="#2F88FF" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M19 29V42H29V29H19Z" fill="#43CCF8" stroke="#FFF" stroke-width="4" stroke-linejoin="round"/><path d="M9 42H39" stroke="#333" stroke-width="4" stroke-linecap="round"/></svg>
                <div style="margin-left: 100px;display: inline-block">
                  首页
                </div>

              </el-menu-item>
            </router-link>
            <router-link class="leftMenu" :to="{name: 'Attention',query: {myInfo:this.$route.query.myInfo,uId:this.myInfo.uId}}">
              <el-menu-item index="2" style="font-size: 20px;border-radius: 5px">
                <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.8579 9.85803C7.23858 13.4773 5 18.4773 5 24.0002C5 29.523 7.23858 34.523 10.8579 38.1423" stroke="#4a90e2" stroke-width="4" stroke-linecap="round"/><path d="M39.1421 38.1423C42.7614 34.523 45 29.523 45 24.0002C45 18.4773 42.7614 13.4773 39.1421 9.85803" stroke="#4a90e2" stroke-width="4" stroke-linecap="round"/><path d="M34.8994 33.8997C37.4329 31.3662 38.9999 27.8662 38.9999 24.0002C38.9999 20.1342 37.4329 16.6342 34.8994 14.1007" stroke="#4a90e2" stroke-width="4" stroke-linecap="round"/><path d="M15.1005 14.1007C12.567 16.6342 11 20.1342 11 24.0002C11 27.8662 12.567 31.3662 15.1005 33.8997" stroke="#4a90e2" stroke-width="4" stroke-linecap="round"/><path d="M28.1818 20C30.2905 20 32 21.6118 32 23.6C32 26.1882 29.4545 28.4 28.1818 29.6C27.3333 30.4 26.2727 31.2 25 32C23.7273 31.2 22.6667 30.4 21.8182 29.6C20.5455 28.4 18 26.1882 18 23.6C18 21.6118 19.7095 20 21.8182 20C23.1463 20 24.316 20.6393 25 21.6093C25.684 20.6393 26.8537 20 28.1818 20Z" fill="#4a90e2" stroke="#4a90e2" stroke-width="4" stroke-linejoin="round"/></svg>
                <div style="margin-left: 100px;display: inline-block">
                  关注
                </div>

              </el-menu-item>
            </router-link>
            <router-link class="leftMenu" :to="{name: 'Fans',query: {myInfo:this.$route.query.myInfo,uId:this.myInfo.uId}}">
              <el-menu-item index="3" style="font-size: 20px;border-radius: 5px">
               <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="14" cy="29" r="5" fill="#4a90e2" stroke="#4a90e2" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="34" cy="29" r="5" fill="#4a90e2" stroke="#4a90e2" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="24" cy="9" r="5" fill="#4a90e2" stroke="#4a90e2" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 44C24 38.4772 19.5228 34 14 34C8.47715 34 4 38.4772 4 44" stroke="#4a90e2" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M44 44C44 38.4772 39.5228 34 34 34C28.4772 34 24 38.4772 24 44" stroke="#4a90e2" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M34 24C34 18.4772 29.5228 14 24 14C18.4772 14 14 18.4772 14 24" stroke="#4a90e2" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
                <div style="margin-left: 100px;display: inline-block">
                 粉丝
                </div>

              </el-menu-item>
            </router-link>
            <router-link class="leftMenu" :to="{name: 'Favorites',query: {myInfo:this.$route.query.myInfo}}">
              <el-menu-item index="4" style="font-size: 20px;border-radius: 5px">
               <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 8C5 6.89543 5.89543 6 7 6H19L24 12H41C42.1046 12 43 12.8954 43 14V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V8Z" fill="#2F88FF" stroke="#333" stroke-width="4" stroke-linejoin="round"/><path d="M24 20L26.243 24.9128L31.6085 25.5279L27.6292 29.1792L28.7023 34.4721L24 31.816L19.2977 34.4721L20.3708 29.1792L16.3915 25.5279L21.757 24.9128L24 20Z" fill="#43CCF8" stroke="#FFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
                <div style="margin-left: 100px;display: inline-block">
                  收藏
                </div>

              </el-menu-item>
            </router-link>

            <router-link class="leftMenu" :to="{name: 'MyInfo',query:{
                     uId:this.myInfo.uId,
                     myInfo:this.$route.query.myInfo
                   }}">
              <el-menu-item index="5" style="font-size: 20px;border-radius: 5px">
                <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" stroke="#2F88FF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 23C26.7614 23 29 20.7614 29 18C29 15.2386 26.7614 13 24 13C21.2386 13 19 15.2386 19 18C19 20.7614 21.2386 23 24 23Z" fill="none" stroke="#2F88FF" stroke-width="4" stroke-linejoin="round"/><path d="M10.022 38.332C10.3657 33.1206 14.7016 29 20 29H28C33.2914 29 37.6229 33.1097 37.9767 38.3113" stroke="#2F88FF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
                <div style="margin-left: 100px;display: inline-block">
                  个人主页
                </div>

              </el-menu-item>
            </router-link>

          </el-menu>
        </div>


      </div>
    </div>
    <div id="main">
        <router-view  :key="this.$route.fullPath"  ></router-view>
    </div>

  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      styleFlag: 1,
      myInfo: JSON.parse(this.$route.query.myInfo),
      historyArticleList: []
    }
  },
  methods: {
    route(name) {
      this.$router.push(name)
    },

  },
  computed: {
    key() {
      return this.$route.path + Math.random();
    }
  },

  created() {
 /*   this.$router.push({
      path: '/mainPage',
      query: {
        myInfo: this.$route.query.myInfo,
        time:new Date().getTime()
      }
    })*/

    this.historyArticleList = this.$route.query.historyArticleList

  },
}
</script>

<style scoped>

.menu {
  color: black;

  height: 10px;


  border-radius: 10px;
  margin-left: 5px;
  width: 100%;

}

.historyArticle {
  color: black;
  flex: 2;
  height: 200px;
  margin-top: 20px;

  background-color: white;
  border-radius: 10px;
  margin-left: 5px;
  width: 80%;
  color: black;
}

.myInfoAvatar {
  float: left;
  height: 50px;
  width: 50px;
  margin-left: 10px;
  margin-top: 10px;
  border-radius: 10px;
}

.myInfo {
  height: 130px;
  margin-top: 100px;
  background-color: white;
  border-radius: 10px;
  margin-left: 5px;
  width: 80%;
  color: black;
  flex: 1;
}

.el-menu {
  border-right: 0;
}

.icon {
  height: 50px;
  float: left;

}

.leftMenu {

  width: 100%;
  height: 40px;
  text-decoration: none;
  border: none;
  border-radius: 10px;
  background-color: rgba(245, 243, 243, 0.9);
  font-size: 18px;
  color: black;
}


.leftMenu:hover {
  color: #3b82f6;
  background-color: rgba(243, 241, 241, 0.2);


}


.rightPage {
  flex: 2;

}

#left {
  position: fixed;
  top: 0;
  left: 7%;
  display: flex;
  flex: 1;

}

#main {

  margin-left: 25%;
  flex: 2;
}

#right {
  flex-direction: column;
  display: flex;
  flex: 1;

}

#night {
  background-color: rgba(245, 243, 243, 0.9);
  height: 100%;
  transition: 1s;
  display: flex;


}


</style>