<template>
  <div class="all">
    <div class="x-top">
      <img src="../assets/img/1.png" alt="" class="img1">
      <div class="x-top-r">
        <img src="../assets/img/logo.png" alt="" :class="{img2:judge,img3:!judge}">
        <div class="x-top-r-t">
          <ul class="t-ul">
            <li>镜</li>
            <li>月</li>
            <li>着</li>
            <li>物</li>
            <li>レ</li>
            <li>ン</li>
            <li>タ</li>
            <li>ル</li>
          </ul>
<!--          选择语言-->
          <div class="select">
            <el-select v-model="language">
              <el-option
                v-for="item in languageList"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
<!--          四个图标链接-->
          <div class="x-top-r-t-r">
            <a href="https://m.facebook.com/Luna%E9%95%9C%E6%9C%88%E5%92%8C%E6%9C%8D%E4%BD%93%E9%AA%8C%E9%A6%86-100939754817445/?notif_t=aymt_biz_growth_page_admin_guidance_tip&notif_id=1583646023601313&ref=m_notif">
              <i class="iconfont facebook">&#xe639;</i>
            </a>
            <a href="https://instagram.com/kimono_luna?igshid=hnxnodfvih4d">
              <i class="iconfont ins">&#xe709;</i>
            </a>
            <a href="https://weibo.com/u/7382395029">
              <i class="iconfont weibo">&#xe607;</i>
            </a>
            <a href="https://www.xiaohongshu.com/user/profile/5ccdb3ec000000001001857b?xhsshare=CopyLink&appuid=5ccdb3ec000000001001857b&apptime=1583820815">
              <i class="iconfont xiaohongshu">&#xe62c;</i>
            </a>
          </div>
        </div>
        <div class="swiper">
          <el-carousel height="250px" direction="vertical" :autoplay="false">
            <el-carousel-item v-for="(item,index) in picList" :key="index">
              <img :src="item.image_url" alt="未找到图片">
            </el-carousel-item>
          </el-carousel>
        </div>
        <ul class="b-ul">
          <li>L</li>
          <li>U</li>
          <li>N</li>
          <li>A</li>
          <li>镜</li>
          <li>月</li>
          <li>着</li>
          <li>物</li>
          <li>レ</li>
          <li>ン</li>
          <li>タ</li>
          <li>ル</li>
        </ul>
      </div>
    </div>
    <div class="x-middle">
      <img src="../assets/img/taozhuangliebiao.png" alt="未找到图片" style="width: 110px;margin: 0 0 56px">
      <ul class="c-ul">
        <li @click="ojbk"><a href="" :class="{liebiao1:normal,liebiao2:!normal}">luna浴衣プラン</a></li>
        <li><a href="" :class="{liebiao1:!normal,liebiao2: normal}">Lunaスタンダードプラン</a></li>
      </ul>
      <ul class="chanpin">
        <li class="chanpinlist" v-for="(item,index) in goodsList" :key="index">
          <a class="piccontainer" href="item.detail_image_url">
            <img class="pic1" :src="item.images" alt="">
          </a>
          <div class="duanluo">
            <p>{{item.comment}}</p>
          </div>
          <div class="goods-name">
            <h2 class="title">{{item.title}}
            <span class="same-title">Lunaプラン</span>
            </h2>
            <p class="sale">
              <s class="price">¥{{item.price}}(税引き前)</s>
              <img src="../assets/icon/sale.png" alt="" style="height: 12px">
              <span class="real-price">¥{{item.real_price}}(税引き前)</span>
            </p>
            <p class="xiangxi">{{item.comment}}</p>
            <a class="looking" href="">コース詳細<img src="../assets/icon/mai.png" alt=""></a>
          </div>
          <a class="btn" href="">即時予約</a>
        </li>
      </ul>
    </div>
    <div class="x-bottom">
      <img src="../assets/img/logob.png" alt="" style="width: 67px">
      <div class="message">
        <p>台東区東上野2-15-3</p>
        <br/>
        <p>都营日比谷线&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上野战&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;徒步3分钟</p>
        <p>都营大江户线&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上野御徒町战&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;徒步10分钟</p>
        <p>JR山手线&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上野战&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;徒步10分钟</p>
        <p>JR山手线&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;御徒町战&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;徒步10分钟</p>
        <p>連絡先: +81 7013790822</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      dis: true,
      normal: true,
      judge: true,
      scroll: '',
      message: '',
      picList: [],
      goodsList: [],
      languageList: [
        {
          value: 'Japan',
          label: '日本语'
        },
        {
          value: 'China',
          label: '中文'
        },
        {
          value: 'English',
          label: 'English'
        }
      ],
      language: '日本语'
    }
  },
  methods: {
    ojbk () {
      console.log('sdfafdas')
    },
    scrollTop () {
      this.scroll = document.documentElement.scrollTop || document.body.scrollTop
      if (this.scroll >= 128) {
        this.judge = false
      } else {
        this.judge = true
      }
    },
    getPic () {
      this.$axios({
        method: 'POST',
        url: 'http://127.0.0.1/api/frontend/banner/list?lang=ja',
        headers: {
        }
      })
        .then(res => {
          this.picList = res.data.data.list
        })
        .catch(error => {
          console.log(error)
        })
    },
    getgoodsList () {
      this.$axios({
        method: 'POST',
        url: 'http://127.0.0.1/api/frontend/product/list?lang=ja',
        headers: {
        }
      })
        .then(res => {
          console.log(res.data.data)
          this.goodsList = res.data.data.list
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  mounted () {
    this.getPic()
    this.getgoodsList()
    window.addEventListener('scroll', this.scrollTop)
  }
}
</script>

<style>
@import "../style/base.scss";
@import "../fonts/iconfont.css";
.all{
  width: 1200px;
  margin: 0 auto;
  position: relative;
}

.x-top{
  width: 100%;
  height: 365px;
  background-color: white;
  position: absolute;
}
.img1{
  top: 20px;
  width: 43px;
  position: absolute;
}
.x-top-r{
  top: 0;
  right: 0;
  height: 365px;
  width: 1100px;
  background-color: white;
  position: absolute;
}
.img2{
  top: calc(50% - 55px);
  height: 55px;
  position: absolute;
  display: flex;
  align-items: center;
  margin: 0 45px 0 35px;
}

.img3{
  top: 0px;
  height: 40px;
  position: fixed;
  display: flex;
  align-items: center;
  margin: 0 45px 0 35px;
  z-index:999
}

.x-top-r-t{
  height: 55px;
  width: 1100px;
  position: fixed;
  top: 0;
  background-color: white;
  z-index:998
}

.x-top-r-t .t-ul{
  left: 230px;
  position: absolute;
}

.x-top-r-t .t-ul li{
  display: inline-block;
  width: 70px;
  font-size: 12px;
  color: #3e3a39;
  line-height: 55px;
}

/*选择语言*/
.x-top-r-t .select{
  left: 813px;
  position: absolute;
  line-height: 55px;
  height: 55px;
  width: 124px;
}

/*选择语言-选择框*/
.el-input .el-input__inner{
  font-size: 12px;
  text-align: center;
}

.el-input .el-input__inner{
  height: 55px;
  border: none;
  border-radius: 0;
}

/*选择语言-箭头位置*/
.el-input__icon{
  position: absolute;
  right: 20px;
}

/*选择语言-替换箭头*/
.el-icon-arrow-up:before {
  content: "\e78f";
  font-size: 14px !important;
  line-height: 55px;
  color: #3e3a39;
}

/*选择语言-下拉框位置、背景颜色*/
.el-scrollbar{
  background-color: white;
  position: absolute;
  top: -12px;
  width: 124px;
}

/*选择语言-下拉框去边框和阴影*/
.el-select-dropdown,.el-popper{
  box-shadow: none;
  border: none;
}

.el-select-dropdown__item.hover{
  background-color: #ff575e;
}

.el-select-dropdown__item.hover span{
  color: white;
}

.el-select-dropdown__item.selected span{
  color: #777473;
  font-size: 12px;
  font-weight: normal;
}

.el-select-dropdown__item.selected.hover span{
  color: white;
}
.el-select-dropdown__list{
  padding: 0;
}

.el-select-dropdown__list li{
  color: #777473;
  font-size: 12px;
  text-align: center;
}

.el-select-dropdown__item span{
  color: #777473;
}

.el-select-dropdown__item.selected{
  color: #777473;
}

.el-popper .popper__arrow,.el-popper .popper__arrow::after{
  display: none;
}

/*图标*/
.x-top-r-t-r{
  position: absolute;
  right: 60px;
  width: 870px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100px;
}

.x-top-r-t-r a{
  margin-left: 18px;
}

.x-top-r-t-r a i{
  color: #000000;
  line-height: 55px;
  height: 55px;
  font-size: 12px;
}

.x-top-r-t-r a .weibo{
  font-size: 15px;
  position: absolute;
}

.x-top-r-t-r a .xiaohongshu{
  font-size: 23px;
  position: absolute;
  top: 1px;
  margin-left: 16px;
}
/*轮播图*/
.swiper{
  width: 870px;
  height: 250px;
  position: absolute;
  top: 55px;
  right: 0;
  border-radius: 8px;
  overflow: hidden;
}

.el-carousel__item img {
  line-height: 250px;
  margin: 0;

}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

/*bannar的点样式*/
.el-carousel__indicator--vertical .el-carousel__button{
  width: 8px;
  height: 8px;
  border-radius: 4px;
}

/*下方文字*/
.x-top-r .b-ul{
  bottom: 0;
  left: 230px;
  position: absolute;
  width: 870px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.x-top-r .b-ul li{
  display: inline-block;
  font-size: 12px;
  color: #3e3a39;
  line-height: 60px;
}

/*中间商品列表*/
.x-middle{
  position: absolute;
  top: 365px;
  width: 100%;
  height: 1100px;
  background-color: white;
  margin-top: 20px;
}

.x-middle img{
  position: absolute;
  top: 55px;
}

.x-middle .c-ul{
  position: absolute;
  top: 207px;
}

.x-middle .c-ul li{
  margin: 0 0 20px;
  padding: 3px 8px 3px 0;
  font-size: 12px;
  font-weight: bold;
}

.x-middle .c-ul li .liebiao1{
  color: #ff575e;
}

.x-middle .c-ul li .liebiao2{
  color: #3c3c3c;
}

.x-middle .chanpin{
  position: absolute;
  right: 0;
  width: 870px;
  height: 1100px;
  background-color: #f8f8f8;
}

.x-middle .chanpin li{
  width: 870px;
  height: 486px;
  display: block;
  background-color: #f8f8f8;
  position: relative;
  top: 50px;
  padding-top: 6px;
  padding-bottom: 30px;
}
.x-middle .chanpin .chanpinlist .piccontainer{
  width: 400px;
  height: 400px;
  position: absolute;
  bottom: 0;
  left: 16px;
  overflow: hidden;
  border-radius: 5px;
}

.x-middle .chanpin .chanpinlist .piccontainer>img{
  display: inline-block;
  height: auto;
  width: 400px;
}

.x-middle .chanpin .chanpinlist .piccontainer .pic1{
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}
.x-middle .chanpin .chanpinlist .duanluo{
  width: 150px;
  position: absolute;
  right: 16px;
}
.x-middle .chanpin .chanpinlist .duanluo p{
  color: #3e3a39;
}

.x-middle .chanpin .chanpinlist .goods-name{
  width: 448px;
  height: 275px;
  background-color: white;
  padding: 25px 24px 16px;
  position: absolute;
  right: 16px;
  top: calc(50% - 94px);
  box-shadow: 0px 0px 5px 0 rgba(0,0,0,0.01)
}

.x-middle .chanpin .chanpinlist .goods-name .title{
  color: #3e3a39;
}

.x-middle .chanpin .chanpinlist .goods-name .same-title{
  font-size: 14px;
  color: #9e9c9c;
}

.x-middle .chanpin .chanpinlist .goods-name .sale .price{
  font-size: 14px;
  color: #8b8988;
}

.x-middle .chanpin .chanpinlist .goods-name .sale .real-price{
  font-size: 16px;
  padding-left: 40px;
  color: #ff575e;
}

.x-middle .chanpin .chanpinlist .goods-name .sale img{
  position: absolute;
  top: 59px;
}

.x-middle .chanpin .chanpinlist .goods-name .xiangxi{
  font-size: 14px;
  margin-top: 12px;
  font-family: Avenir,Helvetica,Arial,sans-serif;
}

.x-middle .chanpin .chanpinlist .goods-name .looking{
  font-size: 14px;
  color: #ff575e;
  font-family: Avenir,Helvetica,Arial,sans-serif;
  position: absolute;
  bottom: 16px;
}
.x-middle .chanpin .chanpinlist .goods-name .looking img{
  position: absolute;
  top: 6px;
  margin-left: 6px;
}

.x-middle .chanpin .chanpinlist .btn{
  display: block;
  width: 68px;
  height: 68px;
  background-color: #ff575e;
  border-radius: 34px;
  font-size: 14px;
  color: white;
  font-family: Avenir,Helvetica,Arial,sans-serif;
  position: absolute;
  right: 40px;
  bottom: 40px;
  text-align: center;
  padding: 16px 20px;
}
.x-bottom{
  position: absolute;
  top: 1485px;
  width: 100%;
  height: 235px;
  background-color: white;
  margin-top: 80px;
}
.x-bottom img{
  position: absolute;
  top: calc(50% - 57.5px);
}
.x-bottom .message{
  position: absolute;
  top: calc(50% - 60px);
  margin-left: 110px;
}
.x-bottom .message p{
  font-size: 12px;
  font-family: Avenir,Helvetica,Arial,sans-serif;
  font-weight: 600;
}
</style>
