<template>
  <div>

    <div class="mainTitle">
      <button id="mainFirst" @click="changeMainFirst" class="mainTitleBtn">推荐</button>
      <button id="mainSecond" @click="changeMainSecond" class="mainTitleBtn">关注</button>
    </div>
    <div class="type">
      <div class="topType">
        <button class="typeBtn" id="typeHot" @click="changeMenuHot">热门</button>

      </div>

      <router-link :to="{name: 'WriteArticle',query: {myInfo:this.$route.query.myInfo}}">
        <div class="sendArticle">发表文章</div>
      </router-link>


    </div>


    <div class="mainPage">
      <div style="flex: 2">
        <div class="article" v-for="article in this.articleList">


          <div style="height: 10px"></div>
          <div @click="articleDetails(article.aId,article.title,article.avatar,article.favorites,article.uId)"
               class="firstLine">
            <div style="display: inline-block">
              <img class="avatar" :src="article.avatar">
            </div>
            <div style="display: inline-block;margin-left: 5px">
              <div style="margin-bottom: 8px;font-size: 18px">{{ article.name }}</div>
              <div style="font-size: 10px">{{ article.createTime }}</div>
            </div>
          </div>

          <div @click="articleDetails(article.aId,article.title,article.avatar,article.favorites,article.uId)"
               class="secondLine">
            <div style="font-size: 23px;">{{ article.title }}</div>
            <div>{{ article.summary }}</div>
          </div>
          <div class="division"></div>

          <div class="thirdLine">
            <div @click="articleDetails(article.aId,article.title,article.avatar,article.favorites,article.uId)"
                 class="footerBtn">
              <svg style="float: left;margin-top: 5px;margin-left: 90px" width="24" height="24" viewBox="0 0 48 48"
                   fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M44 6H4V36H13V41L23 36H44V6Z" fill="none" stroke="#333" stroke-width="4" stroke-linecap="round"
                      stroke-linejoin="round"/>
                <path d="M14 21H34" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <div style="float:left;margin-top: 10px;margin-left: 10px;font-size: 14px;">{{ article.commentNum }}</div>
            </div>
            <div class="footerBtn">
              <div v-if="article.praise" @click="deletePraise(article.aId)">
                <svg style="float: left;margin-top: 5px;margin-left: 90px" width="24" height="24" viewBox="0 0 48 48"
                     fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M4.18898 22.1733C4.08737 21.0047 5.00852 20 6.18146 20H10C11.1046 20 12 20.8954 12 22V41C12 42.1046 11.1046 43 10 43H7.83363C6.79622 43 5.93102 42.2068 5.84115 41.1733L4.18898 22.1733Z"
                      fill="#4a90e2" stroke="#4a90e2" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                  <path
                      d="M18 21.3745C18 20.5388 18.5194 19.7908 19.2753 19.4345C20.9238 18.6574 23.7329 17.0938 25 14.9805C26.6331 12.2569 26.9411 7.33595 26.9912 6.20878C26.9982 6.05099 26.9937 5.89301 27.0154 5.73656C27.2861 3.78446 31.0543 6.06492 32.5 8.47612C33.2846 9.78471 33.3852 11.504 33.3027 12.8463C33.2144 14.2825 32.7933 15.6699 32.3802 17.0483L31.5 19.9845H42.3569C43.6832 19.9845 44.6421 21.2518 44.2816 22.5281L38.9113 41.5436C38.668 42.4051 37.8818 43 36.9866 43H20C18.8954 43 18 42.1046 18 41V21.3745Z"
                      fill="#4a90e2" stroke="#4a90e2" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div v-else @click="praise(article.aId)">
                <svg style="float: left;margin-top: 5px;margin-left: 90px" width="24" height="24" viewBox="0 0 48 48"
                     fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M27.6002 18.5998V11.3998C27.6002 8.41743 25.1826 5.99977 22.2002 5.99977L15.0002 22.1998V41.9998H35.9162C37.7113 42.0201 39.2471 40.7147 39.5162 38.9398L42.0002 22.7398C42.1587 21.6955 41.8506 20.6343 41.1576 19.8373C40.4645 19.0403 39.4564 18.5878 38.4002 18.5998H27.6002Z"
                      stroke="#333" stroke-width="4" stroke-linejoin="round"/>
                  <path
                      d="M15 22.0001H10.194C8.08532 21.9628 6.2827 23.7095 6 25.7994V38.3994C6.2827 40.4894 8.08532 42.0367 10.194 41.9994H15V22.0001Z"
                      fill="none" stroke="#333" stroke-width="4" stroke-linejoin="round"/>
                </svg>
              </div>
              <div style="float:left;margin-top: 10px;margin-left: 10px;font-size: 14px;">{{ article.praiseNum }}</div>
            </div>
            <div class="footerBtn" @click="getFavorites(article.aId,article)">
              <div v-if="article.favorites">
                <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M23.9986 5L17.8856 17.4776L4 19.4911L14.0589 29.3251L11.6544 43L23.9986 36.4192L36.3454 43L33.9586 29.3251L44 19.4911L30.1913 17.4776L23.9986 5Z"
                      fill="#4a90e2" stroke="#4a90e2" stroke-width="4" stroke-linejoin="round"/>
                </svg>
              </div>
              <div v-else>
                <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M23.9986 5L17.8856 17.4776L4 19.4911L14.0589 29.3251L11.6544 43L23.9986 36.4192L36.3454 43L33.9586 29.3251L44 19.4911L30.1913 17.4776L23.9986 5Z"
                      fill="none" stroke="#000000" stroke-width="4" stroke-linejoin="round"/>
                </svg>

              </div>
            </div>


          </div>


        </div>
      </div>

      <el-dialog
          title="添加到收藏夹"
          :visible.sync="dialogFormVisible"
          width="30%"
      >
        <div style="font-size: 15px" v-for="item in this.favorites">
          <input type="checkbox" :value="item.fId" v-model="articleFavorites"/>
          {{ item.fName }}
        </div>
        <span slot="footer" class="dialog-footer">
               <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="addArticleFavo()">确 定</el-button>
        </span>
      </el-dialog>

      <div id="right">

        <div class="myInfo">
          <div style="width: 100%;height: 60%">
            <img class="myInfoAvatar" :src="this.myInfo.avatar">
            <div style="float: left;margin-top: 27px;margin-left: 10px;font-size: 20px">{{ myInfo.name }}</div>
          </div>

          <div style="width: 100%;margin-top: 15px;text-align: left;margin-left: 5px;font-size: 18px">
            {{ myInfo.signature }}
          </div>
          <div style="height: 10px;width: 100%;margin-top: 5px"></div>
        </div>


        <div class="historyArticle">
          <div style="font-size: 20px;margin-left: 5px;margin-top: 5px">最近浏览</div>
          <div v-for="article in this.historyArticleList">

            <div class="historyArticleList"
                 @click="articleDetails(article.aId,article.title,article.avatar,article.favorites,article.uId)">
              <img style="flex: 1;width: 40px;height: 40px;border-radius: 5px" :src="article.avatar ">
              <div style="flex: 5;margin-top: 10px;margin-left: 2px">
                {{ article.title }}
              </div>

            </div>

          </div>
        </div>

        <div style="flex: 2"></div>
      </div>


    </div>


  </div>
</template>

<script>
export default {
  name: "MainPage",
  data() {
    return {
      articleFavoriteId: null,
      articleFavorites: [],
      favorites: {},
      typeFlag: 1,
      mainFlag: 1,
      mainBtnFlag: 1,
      articleList: {},
      myInfo: JSON.parse(this.$route.query.myInfo),
      historyArticle: {},
      historyArticleList: {},
      dialogFormVisible: false,

    }
  },

  created() {


    this.getHistoryArticle()

    this.changeMenuHot()


    this.changeMainFirst()

  },

  methods: {

    newLink() {
      this.$router.go(0)
    },


    praise(aId) {
      console.log("点赞")
      this.$axios.post("/praise/" + aId + '/' + this.myInfo.uId).then(res => {
        this.changeMenuHot()
      })
    },
    deletePraise(aId) {
      this.$axios.post("/deletePraise/" + aId + '/' + this.myInfo.uId).then(res => {
        this.changeMenuHot()
      })
    },
    addArticleFavo() {
      this.dialogFormVisible = false
      if (this.articleFavorites.length !== 0) {

        this.$axios.post("/favorites/" + this.articleFavoriteId, this.articleFavorites).then(res => {
          if (res.data.code === 200) {
            this.$message({
              showClose: true,
              message: '添加成功!',
              type: 'success'
            });
          }
        })
      }
    },
    getFavorites(aId, article) {
      console.log(article)


      this.articleFavoriteId = aId
      this.dialogFormVisible = true

      console.log('文章id-->' + this.articleFavoriteId)
      this.$axios.get("/favorites/" + this.myInfo.uId).then(res => {
        this.favorites = res.data.data

      })
    },
    getHistoryArticle() {
      console.log('历史浏览接口:' + this.myInfo.uId)


      this.$axios.post("/historyArticle/" + this.myInfo.uId).then(res => {

        this.historyArticleList = res.data.data

      })
      console.log('历史浏览接口:' + this.historyArticleList)

    },


    articleDetails(aId, title, avatar, favorites, uId) {
      const time = new Date().getTime()
      console.log('时间' + time)
      this.historyArticle.uId = this.myInfo.uId
      this.historyArticle.aId = aId
      this.historyArticle.title = title
      this.historyArticle.avatar = avatar
      this.historyArticle.clickTime = time
      /*      this.historyArticle.clickTime=time

            console.log(this.this.historyArticle.clickTime)*/
      this.$axios.post("/historyArticle", this.historyArticle).then(res => {
        this.historyArticleList = res.data.data
      })

      console.log('标志1' + favorites)
      this.$router.push({
        name: 'ArticleDetails',
        query: {
          favorites: favorites,
          myInfo: this.$route.query.myInfo,
          aId: aId,
          articleHostUId: uId,
          historyArticle: this.historyArticle,
          historyArticleList: this.historyArticleList,
        }
      })
    },
    changeMenuHot() {
      this.$axios.get("/article/" + this.myInfo.uId).then(res => {
        this.articleList = res.data.data
      })
      const typeHot = document.getElementById("typeHot")
      const typeNew = document.getElementById("typeNew")

      typeHot.style.cssText = " background-color: rgba(174, 176, 178,0.5);\n" +
          "  color: #409EFF;\n"
      typeNew.style.cssText =
          "  color: black;\n"
    },
    changeMenuNew() {

      this.$axios.get("/articleNew").then(res => {
        this.articleList = res.data.data

      })

      const typeHot = document.getElementById("typeHot")
      const typeNew = document.getElementById("typeNew")
      typeHot.style.cssText = " background-color: white;\n" +
          "  color: black;\n"
      typeNew.style.cssText = " background-color: rgba(174, 176, 178,0.5);\n" +
          "  color: #409EFF;\n"
    },
    changeMainFirst() {

      const mainFirst = document.getElementById("mainFirst")
      const mainSecond = document.getElementById("mainSecond")

      mainFirst.style.cssText = " background-color: rgba(174, 176, 178,0.5);\n" +
          "  color:#409EFF;\n"
      mainSecond.style.cssText =
          "  color: black;\n"
      this.changeMenuHot()
    },
    changeMainSecond() {
      this.$axios.get("/followArticle/" + this.myInfo.uId).then(res => {
        this.articleList = res.data.data

      })


      const mainFirst = document.getElementById("mainFirst")
      const mainSecond = document.getElementById("mainSecond")
      mainSecond.style.cssText = " background-color: rgba(174, 176, 178,0.5);\n" +
          "  color:#409EFF;\n"
      mainFirst.style.cssText = " background-color: white;\n" +
          "  color: black;\n"

    },


  },


}
</script>

<style scoped>
a {
  text-decoration: none;
}

.topType {
  flex: 7;
  height: 50px;
  border-radius: 10px;
  background-color: white;
  color: black;
}

.sendArticle {

  width: 200px;
  margin-right: 130px;
  margin-left: 45px;
  background-color: #409EFF;
  height: 40px;
  padding-top: 10px;

  font-size: 20px;
  border-radius: 10px;
  text-align: center;

  color: white;
  padding-left: 10px;
  padding-right: 10px;
}

.sendArticle:hover {
  cursor: pointer;
}

#typeHot {
  background-color: rgba(96, 104, 117, 0.1);
  color: #409EFF;
}

.historyArticleList {
  padding: 3px;
  margin-left: 5px;
  margin-top: 5px;
  font-size: 18px;
  display: flex;
  flex-direction: row;
}

.historyArticleList:hover {
  background-color: rgba(96, 104, 117, 0.1);
  cursor: pointer;
  border-radius: 10px;
}

.mainPage {
  flex-direction: row;
  display: flex;
}

.secondLine {
  white-space: normal;
  word-break: break-all;
  overflow: hidden;
  margin-left: 10px;
}

.footerBtn {
  flex: 1;
  text-align: center;
  margin-top: 10px;
}

.footerBtn:hover {
  background-color: rgba(174, 176, 178, 0.1);

}

.thirdLine {
  width: 100%;
  height: 40px;
  display: flex;
}

.division {
  margin-top: 2px;
  margin-bottom: 2px;
  width: 80%;
  height: 1px;
  margin-left: 50px;
  background-color: white;
}

.firstLine {
  margin-left: 10px;

  width: 100%;
  height: 60px;

}

.avatar {

  height: 50px;
  width: 50px;
  border-radius: 10px;
}

.article {

  flex: 2;
  color: black;
  margin-top: 5px;
  max-height: 200px;
  border-radius: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
}

.article:hover {
  cursor: pointer;
}

.mainTitleBtn {
  margin-left: 150px;
  margin-top: 20px;
  background-color: white;
  text-decoration: none;
  border: #1e293b;
  width: 70px;
  height: 40px;
  border-radius: 10px;
  font-size: 18px;


}

.mainTitleBtn:hover {
  background-color: rgba(174, 176, 178, 0.1);
}

.mainTitle {
  color: black;

  border-radius: 10px;

  left: 25%;

  height: 80px;

  width: 100%;
}

.typeBtn {
  text-decoration: none;
  border: none;
  border-radius: 10px;
  margin-top: 10px;
  font-size: 18px;
  margin-left: 20px;
  background-color: transparent;


}

.typeBtn:hover {
  color: #409EFF;

  background-color: rgba(31, 29, 29, 0.1);
}

.type {
  display: flex;
  flex-direction: row;
  width: 100%;

}

#right {
  height: 500px;
  margin-left: 20px;
  flex-direction: column;
  display: flex;
  flex: 1;
  color: white;
}

.rightPage {
  flex: 2;

}

.historyArticle {

  flex: 5;
  height: 500px;
  margin-top: 20px;

  background-color: white;
  color: black;
  border-radius: 10px;
  margin-left: 5px;
  width: 70%;

}

.myInfoAvatar {
  float: left;
  height: 50px;
  width: 50px;
  margin-left: 10px;

  border-radius: 10px;
}

.myInfo {
  height: 250px;
  margin-top: 10px;
  background-color: white;
  border-radius: 10px;
  margin-left: 5px;
  width: 65%;
  color: black;
  flex: 2;
  padding: 10px;
}

.el-menu {
  border-right: 0;
}
</style>