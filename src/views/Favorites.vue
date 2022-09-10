<template>
  <div>
    <div class="topBody">
      <div style="flex: 1">
        <router-link :to="{name: 'MainPage',query:{myInfo:this.$route.query.myInfo}}">
          <svg class="backBtn"  width="24" height="24" viewBox="0 0 48 48" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path d="M5.79889 24H41.7989" stroke="#000000" stroke-width="4" stroke-linecap="round"
                  stroke-linejoin="round"/>
            <path d="M17.7988 36L5.79883 24L17.7988 12" stroke="#000000" stroke-width="4" stroke-linecap="round"
                  stroke-linejoin="round"/>
          </svg>
        </router-link>


      </div>
      <div style="flex: 1;font-size: 20px;margin-right: 70px">收藏夹</div>
    </div>
    <div class="mainFavorites">

      <div class="myFavorites">

        <div style="font-size: 20px;flex: 1">我的创建:</div>
        <div style="flex: 1" class="addFavorites" @click="dialogFormVisible=true">
          <svg style="float: left" width="24" height="24" viewBox="0 0 48 48" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path
                d="M5 8C5 6.89543 5.89543 6 7 6H19L24 12H41C42.1046 12 43 12.8954 43 14V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V8Z"
                fill="#2F88FF" stroke="#333" stroke-width="4" stroke-linejoin="round"/>
            <path d="M18 27H30" stroke="#FFF" stroke-width="4" stroke-linecap="round"/>
            <path d="M24 21L24 33" stroke="#FFF" stroke-width="4" stroke-linecap="round"/>
          </svg>
          <div style="float: left;margin-left: 15px;margin-top: 5px">新建收藏夹</div>
        </div>



        <div style="flex: 11">

          <div :tabindex='1' @click="getFavoritesArticles(item.fId)" class="favoritesItem"
               v-for="item in this.favorites">

            <div style="flex: 1">

              <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M10 44H38C39.1046 44 40 43.1046 40 42V14H30V4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44Z"
                    fill="#2F88FF" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M30 4L40 14" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                <path
                    d="M20.85 21C18.7237 21 17 23.0086 17 25.4864C17 29.9727 21.55 34.0513 24 35C26.45 34.0513 31 29.9727 31 25.4864C31 23.0086 29.2763 21 27.15 21C25.8479 21 24.6967 21.7533 24 22.9062C23.3033 21.7533 22.1521 21 20.85 21Z"
                    fill="#43CCF8" stroke="#FFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>

            </div>
            <div style="flex: 2;font-size: 15px;margin-top: 5px">{{ item.fName }}</div>
            <div class="editFavo" id="editFavo">
<!--              <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="24" r="3" fill="#333"/>
                <circle cx="24" cy="24" r="3" fill="#333"/>
                <circle cx="36" cy="24" r="3" fill="#333"/>
              </svg>-->
              <el-dropdown trigger="hover">
                 <span class="el-dropdown-link">
                 <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <circle cx="12" cy="24" r="3" fill="#333"/>
                  <circle cx="24" cy="24" r="3" fill="#333"/>
                 <circle cx="36" cy="24" r="3" fill="#333"/>
                  </svg>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item class="clearfix">
                    <div  @click="deleteFavo(item.fId)" >删除</div>

                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>

            </div>

          </div>

        </div>


      </div>


      <el-dialog
          title="收藏夹信息"
          :visible.sync="dialogFormVisible"
          width="30%"
      >
        <div style="font-size: 20px">
          收藏夹名称:<input ref="favoritesName" type="text" style="border-radius: 5px;height: 25px;width: 200px;">
        </div>
        <span slot="footer" class="dialog-footer">
               <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="addFavorites">确 定</el-button>
        </span>
      </el-dialog>

      <div class="favoritesArticle">


        <div v-for="item in this.favoritesArticle">
          <div style="height: 2px;background-color:rgba(245, 243, 243, 0.9);margin-top: 5px"></div>
          <div class="userArticle" @click="articleDetails(item.aId,item.title,item.avatar,item.uId)">
            <div style="flex-direction: row;display: flex">

              <div style="font-size: 20px;flex: 4"> {{ item.title }}</div>
              <div style="flex: 1;padding-left: 60px">
                <el-dropdown trigger="hover">
                 <span class="el-dropdown-link">
                 <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <circle cx="12" cy="24" r="3" fill="#333"/>
                  <circle cx="24" cy="24" r="3" fill="#333"/>
                 <circle cx="36" cy="24" r="3" fill="#333"/>
                  </svg>
                </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item class="clearfix">
                      <div  @click="deleteFavoriteArticle(item.favoriteArticleId)" >删除</div>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </div>

            </div>

            <div style="display: flex;flex-direction: row">
              <img style="height: 40px;width: 40px;border-radius: 2px" :src="item.avatar">
              <div style="flex: 2;font-size: 20px;margin-top: 10px;margin-left: 5px">{{ item.name }}</div>
              <div style="flex: 8;font-size: 15px;margin-top: 20px;padding-left: 300px">添加时间:{{ item.createTime }}</div>

            </div>
          </div>
        </div>


      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Favorites",
  data() {
    return {
      fId:null,
      dialogFormVisible: false,
      myInfo: JSON.parse(this.$route.query.myInfo),
      favorites: [],
      favorite: {},
      favoritesArticle: [],
      historyArticle: {},

    }
  },
  created() {
    this.getFavorites()


  },

  methods: {
    //删除收藏夹内具体的文章
    deleteFavoriteArticle(id){


      this.$axios.post("/deleteFavoritesArticle/"+id).then(res => {
        if (res.data.code === 200) {
          this.getFavoritesArticles(this.fId)
          this.$message({
            showClose: true,
            message: '删除成功!',
            type: 'success'
          });

        }

      })

    },
    deleteFavo(fID){
      console.log('删除文件夹-->'+fID)
      this.$axios.post("/deleteFavorites/"+fID).then(res => {
        if (res.data.code === 200) {
          this.$message({
            showClose: true,
            message: '删除成功!',
            type: 'success'
          });
          this.getFavorites()
        }
      })

    },

    addFavorites() {
      this.dialogFormVisible = false
      this.favorite.fName = this.$refs.favoritesName.value
      this.favorite.uId = this.myInfo.uId
      console.log('收藏夹名称->' + this.favorite.fName)
      this.$axios.post("/favorites", this.favorite).then(res => {
        if (res.data.code === 200) {
          this.$message({
            showClose: true,
            message: '创建成功!',
            type: 'success'
          });
          this.getFavorites()
        }
      })
      this.getFavorites()
    },
    articleDetails(aId, title, avatar,uId) {
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
          articleHostUId:uId,
          historyArticle: this.historyArticle,
          historyArticleList: this.historyArticleList,
        }
      })
    },
    getFavorites() {
      this.$axios.get("/favorites/" + this.myInfo.uId).then(res => {
        this.favorites = res.data.data

      })
    },
    getFavoritesArticles(fId) {
      this.fId=fId
      this.$axios.get("/favoritesArticle/" + fId).then(res => {
        this.favoritesArticle = res.data.data

      })
    },
    back() {
      this.$router.push({
        path: '/home',
        query: {
          myInfo: this.$route.query.myInfo,
          date: new Date().getTime()
        }
      })
    }
  }
}
</script>

<style scoped>
.item {
  margin-top: 10px;
  margin-right: 40px;
}

.editFavo {
  flex: 1;

}

.addFavorites {
  margin-top: 10px;
  padding-left: 10px;
  justify-content: center;
  justify-items: center;
}

.addFavorites:hover {
  cursor: pointer;

}

.favoritesItem {

  display: flex;
  flex-direction: row;
  margin-top: 10px;
  padding: 10px;
  border-radius: 10px;
}

.favoritesItem:focus {

  background-color: #409EFF;
  color: white;
}

.favoritesItem:hover {
  cursor: pointer;
  background-color: #409EFF;
  color: white;
}

.myFavorites {
  flex: 1;
  background-color: white;
  padding-left: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
}

.favoritesArticle {
  margin-left: 5px;
  flex: 4;
  background-color: white;
  border-radius: 10px;


}

.mainFavorites {
  display: flex;
  flex-direction: row;
  width: 80%;
  min-height: 500px;
  border-radius: 10px;
  height: 100%;
  margin-top: 80px;
  padding: 10px;
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

.userArticle {
  height: 80px;
  background-color: white;
  margin-top: 5px;
  margin-left: 5px;
  padding: 10px;

}

.userArticle:hover {
  cursor: pointer;
  background-color: #409EFF;
  border-radius: 10px;
  color: white;

}

.backBtn:hover {
  cursor: pointer;
}

</style>