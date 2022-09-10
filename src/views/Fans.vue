<template>
  <div>
    <div class="topBody">
      <div style="flex: 1">
        <router-link :to="{name: 'MainPage',query:{myInfo:this.$route.query.myInfo}}">
          <svg class="backBtn" width="24" height="24" viewBox="0 0 48 48" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path d="M5.79889 24H41.7989" stroke="#000000" stroke-width="4" stroke-linecap="round"
                  stroke-linejoin="round"/>
            <path d="M17.7988 36L5.79883 24L17.7988 12" stroke="#000000" stroke-width="4" stroke-linecap="round"
                  stroke-linejoin="round"/>
          </svg>
        </router-link>
      </div>
      <div style="flex: 1;font-size: 20px;margin-right: 70px">粉丝</div>
    </div>




    <div  class="mainFavorites" >
      <div   class="fansInfo" @click="pushUserInfo(item.uId)" v-for="item in this.fansList" >
        <img  style="border-radius: 5px;width: 100px;height: 100px":src="item.avatar">
        <div style="flex: 1;margin-left: 10px;">
          <div style="font-size: 20px;margin-top: 40px">{{item.name}}</div>
          <div style="font-size: 16px;margin-top: 15px;color:rgb(171,170,170); ">{{item.signature}}</div>
        </div>
      </div>
    </div>








  </div>
</template>

<script>
export default {
  name: "Fans",
  data() {
    return {
      uId:this.$route.query.uId,
      myInfo: JSON.parse(this.$route.query.myInfo),
      fansList:[]
    }
  },
  created() {
    this.getFans()
  },
  methods: {
    pushUserInfo(uId){
      this.$router.push({name: 'MyInfo',query:{
          uId:uId,
          myInfo:this.$route.query.myInfo
        }}
      )
    },
    getFans() {
      this.$axios.get("/fans/" + this.uId).then(res => {
        this.fansList = res.data.data

      })
    },
    back() {

      window.history.back()

      /* this.$router.push({
      path: '/home',
      query: {
        myInfo: this.$route.query.myInfo,
        date: new Date().getTime()
      }
    })
  }*/
    }

  }
}
</script>

<style scoped>
.fansInfo{
  margin-top: 20px;display: flex;flex-direction: row;width:33%;background-color: white;height: 100px;
  border-radius: 10px;

}
.fansInfo:hover{
  background-color:rgba(245, 243, 243, 0.9);
  cursor: pointer;
}
.mainFavorites {
  align-content: flex-start;
  flex-flow: wrap;
  display: flex;flex-direction: row;
  width: 80%;
  min-height: 500px;
  border-radius: 10px;
  height: 100%;
  margin-top: 80px;
  padding: 10px;
  background-color: white;
}

.backBtn:hover {
  cursor: pointer;
}

.topBody {
  margin-top: 10px;
  position: fixed;
  top: 0;
  height: 50px;
  width: 50%;
  background-color: rgba(245, 243, 243, 0.9);
  display: flex;
  flex-direction: row;
}



.backBtn:hover {
  cursor: pointer;
}
</style>