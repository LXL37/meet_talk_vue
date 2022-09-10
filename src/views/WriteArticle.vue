<template>
  <div style="display: flex;flex-direction: column">
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
      <div style="flex: 1;font-size: 20px;margin-right: 70px">发表文章</div>
    </div>

    <div class="top">
      <div style="flex: 3">
        <div style="font-size: 20px" >
          标题:<input type="text"maxlength="40" class="title" v-model="article.title"  />
        </div>
        <div style="font-size: 20px" >
          简介:<input type="text" maxlength="40" class="summary" v-model="article.summary"/>
        </div>
      </div>
      <div style="flex: 1"  class="sendBtn" @click="sendArticle">发布</div>

    </div>


    <div >

        <textarea placeholder="请输入markdown格式的内容" class="main" v-html="article.content" v-model="article.content"> </textarea>
    </div>
  </div>

</template>

<script>
export default {
  name: "WriteArticle",
  data() {
    return {
      article:{

      },
      value:'',
      myInfo: JSON.parse(this.$route.query.myInfo),
    }
  },
  methods:{
      sendArticle(){
        this.article.uId=this.myInfo.uId
        this.$axios.post('/article' ,this.article).then(res => {
          if (res.data.code===200){

              this.$message.success("发表成功!")
              this.article=''
          }

        })
      }


  }
}
</script>

<style scoped>
.title{
  border-radius: 5px;
  width: 600px;
  font-size: 18px;
}
.summary{
  border-radius: 5px;
  width: 600px;
  margin-top: 10px;
  font-size: 18px;
}
.sendBtn{
  margin-top: 20px;
  width: 200px;
  background-color:  #409EFF;
  font-size: 20px;
  padding: 5px;
  text-align: center;
  border-radius: 5px;
  color: white;
  margin-bottom: 20px;

}
.sendBtn:hover{
  cursor: pointer;
}
.topBody{
  margin-top: 10px;
  position: fixed;
  top: 0;
  height: 50px;
  width: 50%;
  background-color: rgba(245, 243, 243, 0.9);
  display: flex;
  flex-direction: row;
}
.content{

}
.top {
  display: flex;
  flex-direction: row;
  flex: 1;
  margin-top: 90px;
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  width: 80%;
}

.main {
  resize: none;
  font-size: 18px;
  padding: 10px;
  flex: 8;
  display: flex;
  flex-direction: row;
  background-color: white;
  min-height: 500px;
  min-width: 935px;
  margin-top: 20px;
   border-radius: 10px;

}

#articleContent {
  flex: 1;
  background-color: white;
  border-radius: 5px;
  min-height: 200px;
  height: auto;
  margin-left: 200px;
}

</style>