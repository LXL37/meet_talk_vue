<template>
  <div>
    <div class="top">
      <div class="backBtn" @click="back">
        <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.79889 24H41.7989" stroke="#000000" stroke-width="4" stroke-linecap="round"
                stroke-linejoin="round"/>
          <path d="M17.7988 36L5.79883 24L17.7988 12" stroke="#000000" stroke-width="4" stroke-linecap="round"
                stroke-linejoin="round"/>
        </svg>
      </div>
      <div style="margin-left: 300px;float: left;margin-top: 20px;font-size: 20px">帖子</div>
    </div>

    <div style="display: flex;flex-direction: row">

      <div style="flex: 4;flex-direction: column">

        <div class="article" v-model="this.article">
          <div style="height: 10px"></div>
          <div class="firstLine">
            <div style="display: inline-block">
              <img @click="pushUserInfo()" class="avatar" :src="article.avatar">
            </div>
            <div style="display: inline-block;margin-left: 5px">
              <div style="margin-bottom: 8px">{{ article.name }}</div>
              <div style="font-size: 10px;">{{ article.createTime }}</div>
            </div>
          </div>

          <div class="secondLine">
            <div style="font-size: 23px"><h4>{{ article.title }}</h4></div>
            <div><h4>{{ article.summary }}</h4></div>
            <div style="font-size: 17px" v-html="article.content"></div>
          </div>
          <div class="division"></div>

          <div class="thirdLine">
            <div class="footerBtn">

              <svg style="float: left;margin-top: 5px;margin-left: 90px" width="24" height="24" viewBox="0 0 48 48"
                   fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path d="M44 6H4V36H13V41L23 36H44V6Z" fill="none" stroke="#333" stroke-width="4" stroke-linecap="round"
                      stroke-linejoin="round"/>
                <path d="M14 21H34" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <div style="float: left;margin-top: 10px;margin-left: 10px;font-size: 14px">{{ article.commentNum }}</div>

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
            <div class="footerBtn" @click="getFavorites(article.aId)">
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
        <div style="color: black;font-size: 20px;margin-top: 10px;margin-bottom: 10px;margin-left: 10px">评论区</div>
        <div id="reply">
          <img class="avatar" :src="myInfo.avatar">
          <input id="replyContent" maxlength="50" v-model="commentForm.comment"></input>
          <button style="flex: 2" class="sendBtn" @click="sendComment()">发布</button>
          <button style="flex: 3" class="cancelBtn" @click="cancelPrivate()">取消回复</button>
        </div>
        <!--
            <textarea id="comment" class="replyContent" style="margin-bottom: 10px"></textarea>
            <button class="sendBtn"  style="margin-bottom: 25px" @click="sendComment()">发布</button>
        -->

        <div class="comment" v-for="comment in commentList">
          <div style="height: 10px;"></div>
          <div style="display: inline-block;width: 10px"></div>
          <img class="avatar" :src="comment.avatar">
          <div style="display: inline-block">
            <div style="margin-left: 10px;margin-bottom: 10px">{{ comment.name }}</div>
            <div style="margin-left: 10px">{{ comment.comment }}</div>
          </div>
          <div>

            <div style="font-size: 10px;margin-left: 70px;margin-top: 10px;display: inline-block">{{
                comment.createTime
              }}
            </div>
            <div @click="reply(comment.cId,comment.uId,comment.name)" class="replyBtn">回复</div>

          </div>

          <!--    子评论-->
          <div class="childComment" v-for="childComment in comment.childComments">
            <div style="height: 10px"></div>
            <img class="avatar" :src="childComment.avatar">
            <div style="display: inline-block">

              <div style="margin-left: 10px;margin-bottom: 10px;display: inline-block;">{{ childComment.name }}</div>
              <div style="color: black;display: inline-block;margin-left: 5px">回复了</div>
              <div style="display: inline-block;margin-left: 5px;margin-bottom: 10px;">{{ childComment.toName }}</div>
              <div style="margin-left: 10px">{{ childComment.comment }}</div>
            </div>
            <div>
              <div style="font-size: 10px;margin-left: 60px;margin-top: 10px;display: inline-block">
                {{ childComment.createTime }}
              </div>
              <div class="replyBtn" @click="reply(comment.cId,childComment.uId,childComment.name)">回复</div>

            </div>


          </div>
          <div class="division"></div>

        </div>

        <div style="height: 40px"></div>

      </div>


      <div class="authorInfo">

        <div class="userInfo"  style="flex: 1">
          <div style="flex: 1;display: flex;flex-direction: row">
            <div style="flex: 1">
              <img @click="pushUserInfo()"  class="myInfo"  :src="userInfo.avatar">
            </div>
            <div style="flex: 2">
              <div style="font-size: 20px">{{ this.userInfo.name }}</div>
              <div style="font-size: 15px;color: #9499A0;margin-top: 20px">{{ this.userInfo.signature }}</div>
            </div>
          </div>

          <div style="flex: 1">
            <div class="follow" @click="followUser" v-if="this.uId!==this.myInfo.uId  && !this.isFollow">
              关注
            </div>
            <div class="cancelFollow" @click="cancelFollow" v-else-if="this.uId!==this.myInfo.uId &&  this.isFollow">
              取消关注
            </div>
          </div>
        </div>



        <div  class="newArticle" style="flex: 2">
          最新帖子:
          <div  v-for="item in this.articleList">
            <div  @click="articleDetails(item.aId,item.title,item.avatar,item.favorites,item.uId) " class="articleItem"  >
              <img style="width: 40px;height: 40px;border-radius: 5px" :src="item.avatar">
              <div style="flex: 1;margin-top: 10px;margin-left: 5px;font-size: 18px">
                {{item.title}}
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>


  </div>
</template>

<script>
export default {

  name: "ArticleDetails",
  data() {
    return {
      userInfo: null,
      isFollow: null,
      articleList: null,
      uId: this.$route.query.articleHostUId,
      dialogFormVisible: false,
      articleFavoriteId: null,
      articleFavorites: [],
      favorites: {},
      article: {
        aId: null,
        content: null,
        createTime: null,
        summary: null,
        title: null,
        uId: null
      },
      commentForm: {
        cId: null,
        toCId: null,
        uId: null,
        aId: 1,
        rootCId: null,
        root: 1,
        name: '',
        toName: '',
        parentUId: null,
        comment: '',
        avatar: '',
      },
      myInfo: JSON.parse(this.$route.query.myInfo),
      aId: this.$route.query.aId,
      commentList: [],
      historyArticleList: {},
      historyArticle: {},
    }
  },
  created() {
    console.log('标志' + this.favoritesFlag)
    this.getComments()
    this.getArticle()
    this.getUserInfo()
    this.getArticleNew()
  },
  watch: {
    $route(to, from) {
      //重新获取数据
      this.getComments()
      this.getArticle()
      this.getUserInfo()
      this.getArticleNew()
    }
  },
  methods: {
    getArticleNew() {
      this.$axios.get("/articleNew").then(res => {
        //只取前五条数据
        this.articleList = res.data.data.slice(0,5)
        console.log('最新帖子'+this.articleList)
      })
    },
    followUser() {

      this.$axios.post("/follow/" + this.myInfo.uId + '/' + this.uId).then(res => {
        this.getUserInfo()
      })
    },
    cancelFollow() {
      this.$axios.delete("/follow/" + this.myInfo.uId + '/' + this.uId).then(res => {
        console.log('取消关注')
        this.getUserInfo()
      })
    },
    getUserInfo() {
      this.$axios.get("/user/" + this.uId + '/' + this.myInfo.uId).then(res => {
        console.log('文章用户id:' + this.uId, '我的ID' + this.myInfo.uId)
        this.isFollow = res.data.data.follow
        this.userInfo = res.data.data.user

      })
    },
    praise(aId) {
      console.log("点赞")
      this.$axios.post("/praise/" + aId + '/' + this.myInfo.uId).then(res => {
        this.getArticle()
      })
    },
    deletePraise(aId) {
      this.$axios.post("/deletePraise/" + aId + '/' + this.myInfo.uId).then(res => {
        this.getArticle()
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
    getFavorites(aId) {
      this.articleFavoriteId = aId
      this.dialogFormVisible = true

      console.log('文章id-->' + this.articleFavoriteId)
      this.$axios.get("/favorites/" + this.myInfo.uId).then(res => {
        this.favorites = res.data.data

      })
    },
    pushUserInfo() {
      this.$router.push({
            name: 'MyInfo', query: {
              uId: this.article.uId,
              myInfo: this.$route.query.myInfo
            }
          }
      )
    },
    getArticle() {

      this.$axios.get("/articleDetails/" + this.aId + '/' + this.myInfo.uId).then(res => {
        this.article = res.data.data
        this.article.content=this.md2html(res.data.data.content)
        console.log('文章详情-->' + res)
      })
    },
    getComments() {
      this.$axios.get("/comment/" + this.aId).then(res => {
        this.commentList = res.data.data
        console.log(res.data.data)
      })
    },
    reply(rootCId, parentUId, name) {
      const content = document.getElementById('replyContent');


      if (parentUId === this.myInfo.uId) {
        this.$message({
          showClose: true,
          message: '不能回复自己!',
          type: 'error'
        });
      } else {
        content.setAttribute('placeholder', '回复' + name)
        this.commentForm.rootCId = rootCId
        this.commentForm.parentUId = parentUId

      }


    },
    cancelPrivate() {


      this.commentForm.rootCId = null
      this.commentForm.parentUId = null
      const content = document.getElementById('replyContent');
      content.value=""
      content.setAttribute('placeholder', '')
    },
    sendComment() {

      if (this.commentForm.parentUId != null) {
        this.commentForm.root = 0;
      }
      console.log("发送的评论->" + this.commentForm)

      this.commentForm.uId = this.myInfo.uId
      this.commentForm.aId = this.aId

      this.$axios.post("/comment", this.commentForm).then(res => {
        if (res.data.code === 200) {
          this.$message({

            showClose: true,
            message: '发送成功',
            type: 'success'
          });

          this.getComments()
        }
      })
      this.commentForm.comment=''
    },
    articleDetails(aId, title, avatar,favorites,toUId) {
      this.uId=toUId
      this.aId=aId

      this.$router.push({
        name: 'ArticleDetails',
        query: {
          favorites:favorites,
          myInfo: this.$route.query.myInfo,
          aId: aId,
          articleHostUId:toUId,
          historyArticle: this.historyArticle,
          historyArticleList: this.historyArticleList,
        }
      })
    },
    back() {
      this.$router.push({
        name: 'MainPage',
        query: {
          myInfo: this.$route.query.myInfo,
          historyArticle: this.historyArticle,
        }
      })
    }
  }
}
</script>

<style scoped>
input::placeholder{
  left: 10px;
 padding-top: 10px;

}
.myInfo{
  width: 70px;height: 70px;border-radius: 5px
}
.myInfo:hover{
  cursor: pointer;
}
.articleItem{
  display: flex;flex-direction: row;margin-top: 2px;
  border-radius: 10px;
}
.articleItem:hover{
  background-color:rgba(245, 243, 243, 0.9);
  cursor: pointer;
}
.newArticle{

  padding: 10px;
  background-color: white;
  width: 250px;
  margin-top: 20px;
  border-radius: 10px;
}
.userInfo{
  min-height: 137px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: white;
  width: 250px;

  border-radius: 10px;

}
.cancelFollow {
  margin-top: 10px;
  margin-left: 10px;
  background-color: #ee4969;
  height: 30px;
  width: 90%;
  font-size: 20px;
  text-align: center;
  border-radius: 10px;
  padding-top: 3px;
  color: white;

}

.cancelFollow:hover {
  cursor: pointer;
}

.follow {
  margin-top: 10px;
  text-align: center;
  margin-left: 10px;
  background-color: #409EFF;
  height: 30px;
  width: 90%;
  font-size: 20px;
  border-radius: 10px;
  padding-top: 3px;
  color: white;

}

.follow:hover {
  cursor: pointer;
}

.authorInfo {
  padding: 10px;
  display: flex;
  flex-direction: column;
  flex: 1;

  margin-top: 100px;
  margin-right: 100px;
  border-radius: 10px;
  height: 250px;
}

textarea {
  font-size: 18px;
}

.cancelBtn {
  float: right;

  background-color:#409EFF;
  color: white;
  border: none;
  margin-left: 10px;
  height: 45px;


  font-size: 18px;
  border-radius: 10px;


}

.sendBtn {

  float: right;

  background-color:#409EFF;
  color: white;
  border: none;
  margin-left: 10px;
  height: 45px;

  width: 100px;
  font-size: 18px;
  border-radius: 10px;


}
.sendBtn:hover{
  cursor: pointer;
}

#replyContent {
  height: 40px;
  margin-left: 10px;
  border: none;
  resize: none;
  width: 450px;
  border-radius: 10px;
}

#reply {
  display: flex;
  flex-direction: row;
  height: 50px;
  margin-top: 20px;
  margin-left: 10px;
  margin-bottom: 10px;
  width:97%;
}

.replyBtn {
  display: inline-block;
  margin-left: 10px;
  color: black
}

.replyBtn:hover {
  cursor: pointer;
  color:#409EFF;
}

.childComment {
  margin-left: 50px;

}

.comment {

  color: black;
  border-radius: 10px;

  background-color: white;
  width:97%;
}

.top {
  background-color: rgba(245, 243, 243, 0.9);
  border-radius: 10px;
  position: fixed;
  top: 0;
  color: black;
  height: 50px;
  width: 51%;
}

.backBtn {
  float: left;
  margin-top: 15px;
  text-decoration: none;
  background-color: transparent;
  border: none;
}

.backBtn:hover {
  cursor: pointer;
}


.secondLine {

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
  width:97%;
  height: 40px;
  display: flex;
}

.division {
  margin-top: 2px;
  margin-bottom: 2px;
  width:97%;
  height: 1px;

}

.firstLine {
  margin-left: 10px;

  width:97%;
  height: 60px;

}

.firstLine:hover {
  cursor: pointer;
}

.avatar {

  height: 50px;
  width: 50px;
  border-radius: 10px;
}

.article {
  margin-top: 80px;

  color: black;


  border-radius: 10px;
  background-color: white;
  width:97%;
}


</style>