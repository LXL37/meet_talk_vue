<template>
  <div class="mainBody">
    <div class="leftBody">

      <div class="topBody">
        <div style="flex: 1">
          <router-link :to="{name: 'MainPage',query:{myInfo:this.$route.query.myInfo}}">
            <svg class="backBtn" @click="back" width="24" height="24" viewBox="0 0 48 48" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path d="M5.79889 24H41.7989" stroke="#000000" stroke-width="4" stroke-linecap="round"
                    stroke-linejoin="round"/>
              <path d="M17.7988 36L5.79883 24L17.7988 12" stroke="#000000" stroke-width="4" stroke-linecap="round"
                    stroke-linejoin="round"/>
            </svg>
          </router-link>
        </div>
        <div style="flex: 1;font-size: 20px;margin-right: 70px">个人主页</div>
      </div>

      <div class="infoBody">

        <div style="display: flex;flex-direction: row;flex: 1">

          <div style="flex: 4;display: flex;flex-direction: column;">
            <div style="display: flex;flex-direction: row;flex: 1">
              <img style="flex: 1;height: 150px;width:150px;border-radius: 5px" :src="this.userInfo.avatar">
              <div style="flex: 4;display: flex;flex-direction: column;">
                <div style="flex: 1" class="infoName">{{ userInfo.name }}</div>
                <div style="flex: 1;font-size: 20px;color: #9499A0;margin-left: 20px;margin-top: 75px">
                  {{ userInfo.signature }}
                </div>

              </div>

              <div @click="changePrivate(0)" style="flex: 2;background-color: #ee4969" class="privateMode"
                   v-if="this.uId===this.myInfo.uId&& this.myInfo.privateMode===1">
                私密模式
              </div>
              <div @click="changePrivate(1)" style="flex: 2;background-color: #409EFF" class="privateMode"
                   v-if="this.uId===this.myInfo.uId && this.myInfo.privateMode===0">
                正常模式
              </div>

              <div style="flex: 2" class="follow" @click="followUser"
                   v-if=" this.uId!==this.myInfo.uId&&!this.isFollow">
                关注
              </div>
              <div style="flex: 2" class="cancelFollow" @click="cancelFollow"
                   v-else-if="this.uId!==this.myInfo.uId&& this.isFollow">
                取消关注
              </div>

            </div>
            <div style="flex: 1;display: flex;flex-direction: row">

              <div style="flex: 1" class="attentionBtn" @click="toAttention">
                关注列表
              </div>
              <div style="flex: 1" class="attentionBtn" @click="toFans">
                粉丝列表
              </div>

            </div>


            <div style="flex: 1;display: flex;flex-direction: row">


            </div>

          </div>

        </div>


      </div>

      <div class="articleInfo">
        <div class="postArticle">
          历史发表:
        </div>
        <div v-for="article in articleList">
          <div style="height: 2px;background-color:rgba(245, 243, 243, 0.9);margin-top: 5px"></div>
          <div class="userArticle" @click="articleDetails(article.aId,article.title,userInfo.avatar,article.uId)">
            <div style="font-size: 20px"> {{ article.title }}</div>
            <div style="display: flex;flex-direction: row;margin-top: 10px">
              <div style="flex: 1">
                <img style="height: 40px;width: 40px;border-radius: 2px" :src="userInfo.avatar">
              </div>
              <div style="flex: 1;margin-top: 20px;margin-right: 120px">{{ userInfo.name }}</div>

              <div style="flex: 10">
                <div style="flex: 1;margin-top: 20px">{{ article.createTime }}</div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>

    <div class="rightBody"></div>
  </div>
</template>

<script>
export default {
  name: "MyInfo",
  data() {
    return {
      isFollow: null,

      uId: this.$route.query.uId,
      styleFlag: 1,
      myInfo: JSON.parse(this.$route.query.myInfo),
      userInfo: {},
      articleList: [],
      historyArticle: {}
    }
  },
  created() {
    console.log('uid:', this.uId)
    console.log('MyUid:', this.myInfo.uId)
    this.getUserInfo()

  },
  methods: {
    toAttention() {
      if (this.uId === this.myInfo.uId) {
        console.log('本人查看')

        this.$router.push({
              name: 'Attention',
              query: {
                uId: this.uId, myInfo: this.$route.query.myInfo
              }
            }
        )
      } else {
        if (this.userInfo.privateMode === 1) {
          this.$message.info("对方设置为私密模式,您无法查看")
        } else {
          this.$router.push({
                name: 'Attention',
                query: {
                  uId: this.uId, myInfo: this.$route.query.myInfo
                }
              }
          )
        }
      }


    },
    toFans() {
      if (this.uId === this.myInfo.uId) {
        this.$router.push({
              name: 'Fans',
              query: {
                uId: this.uId, myInfo: this.$route.query.myInfo
              }
            }
        )
      } else {
        if (this.userInfo.privateMode === 1) {
          this.$message.info("对方设置为私密模式,您无法查看")
        } else {
          this.$router.push({
                name: 'Fans',
                query: {
                  uId: this.uId, myInfo: this.$route.query.myInfo
                }
              }
          )
        }
      }

    },
    changePrivate(value) {
      this.$axios.post("/private/" + this.myInfo.uId + '/' + value).then(res => {
        console.log('我的信息:', res.data.data)
        this.myInfo = res.data.data
      })
    },
    followUser() {

      this.$axios.post("/follow/" + this.myInfo.uId + '/' + this.uId).then(res => {
        this.getUserInfo()
      })
    },
    cancelFollow() {
      this.$axios.delete("/follow/" + this.myInfo.uId + '/' + this.uId).then(res => {
        this.getUserInfo()
      })
    },
    articleDetails(aId, title, avatar, uId) {
      const time = new Date().getTime()

      this.historyArticle.uId = this.myInfo.uId
      this.historyArticle.aId = aId
      this.historyArticle.title = title
      this.historyArticle.avatar = avatar
      this.historyArticle.clickTime = time

      this.$axios.post("/historyArticle", this.historyArticle).then(res => {
        this.historyArticleList = res.data.data
      })

      this.$router.push({
        name: 'ArticleDetails',
        query: {
          myInfo: this.$route.query.myInfo,
          aId: aId,
          articleHostUId: uId,
          historyArticle: this.historyArticle,
          historyArticleList: this.historyArticleList,
        }
      })
    },
    getUserInfo() {
      this.$axios.get("/user/" + this.uId + '/' + this.myInfo.uId).then(res => {
        console.log('个人信息:' + res)
        this.isFollow = res.data.data.follow
        this.userInfo = res.data.data.user
        this.articleList = res.data.data.articleInfoVos

      })
    },
    back() {
      //    window.history.back()
      /* this.$router.push({
         name: 'MainPage',
         query: {
           myInfo: this.$route.query.myInfo,
         }
       })*/
    }
  }
}
</script>

<style scoped>
.privateMode {
  margin-left: 50px;
  margin-right: 50px;

  margin-top: 130px;

  height: 30px;
  width: 90px;
  font-size: 20px;
  border-radius: 10px;

  text-align: center;
  padding-top: 3px;
  color: white;
  padding-left: 10px;
}

.privateMode:hover {
  cursor: pointer;
}

.cancelFollow {
  margin-left: 50px;
  margin-right: 50px;

  margin-top: 130px;

  background-color: #ee4969;
  height: 30px;
  width: 90px;
  font-size: 20px;
  border-radius: 10px;

  text-align: center;
  padding-top: 3px;
  color: white;
  padding-left: 10px;
}

.cancelFollow:hover {
  cursor: pointer;
}

.follow {
  margin-left: 50px;
  margin-right: 50px;

  margin-top: 130px;


  background-color: #409EFF;
  height: 30px;
  width: 90px;
  font-size: 20px;
  border-radius: 10px;
  text-align: center;
  padding-top: 3px;
  color: white;
  padding-left: 10px;

}

.follow:hover {
  cursor: pointer;
}

.attentionBtn {
  margin-top: 10px;
  margin-right: 10px;
  color: white;
  border-radius: 10px;
  height: 30px;
  background-color: #409EFF;
  font-size: 20px;
  text-align: center;
  padding-top: 2px;
}

.attentionBtn:hover {
  cursor: pointer;
}

a {
  text-decoration: none;

}

.userArticle {
  height: 80px;
  background-color: white;
  margin-top: 5px;
  width: 100%;
  padding: 5px;
}

.userArticle:hover {
  cursor: pointer;
  background-color: #409EFF;
  border-radius: 10px;
  color: white;

}

.postArticle {
  font-size: 20px;
  border-radius: 10px;
  width: 90px;
  height: 20px;

  padding-left: 10px;
  padding-top: 5px;
  padding-bottom: 15px;
}

.articleInfo {
  border-radius: 10px;
  background-color: white;
  flex: 1;
  margin-top: 10px;
  padding: 10px;
}

.backBtn:hover {
  cursor: pointer;
}

.infoName {
  font-size: 25px;
  margin-top: 20px;
  margin-left: 20px;
}

.infoBody {
  color: black;
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  background-color: white;
  border-radius: 10px;
  padding-top: 5px;
  padding-left: 5px;
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

.leftBody {
  flex: 2;
  height: 100%;
  width: 100%;


}

.rightBody {
  flex: 1;


}

.mainBody {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
}
</style>