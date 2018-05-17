<template>
    <div class="home" id="home">
        <!-- 轮播 -->
        <div class="banner">
            <mt-swipe :auto="4000">
                <mt-swipe-item v-for="(item, index) in bannerArr" :key="index">
                    <img style="width:100%;" :src="item.Picture" alt="">
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <!-- 搜索 -->
        <mt-search
            v-model="value"
            cancel-text="取消"
            placeholder="搜索">
        </mt-search>
        <!-- 商品列表 -->
        <div style="background-color:#d9d9d9;">
            <div class="shopItem">
                    <el-row :gutter="20" v-for="(item, index) in shopArr" :key="index" style="margin:0;">
                        <router-link :to="{ path: 'shopDetail' , query: { id : item.ID} }">
                            <el-col :span="1">&nbsp;</el-col>
                            <el-col :span="16">
                                <div class="grid-content bg-purple">
                                    <p class="bp" style="color:#333;"><span v-if=" item.IsHot == '1'" class="hot">推荐</span>{{item.Name}} {{item.Size}}</p>
                                    <p class="bp">{{item.ShortDescription}}</p>
                                    <p class="bp" style="color:red;font-weight:bold;font-size:.5rem;"> 
                                        ￥ <span style="font-size:1rem;"> {{item.Price}}</span>
                                        <span style="margin-left:1rem;color:#999;"> [ 库存：{{item.Stock}} pcs ] </span> 
                                    </p>
                                </div>
                                <!-- 上拉加载更多 -->
                            </el-col>
                            <el-col :span="6" style="padding:0;">
                                <div class="grid-content bg-purple">
                                    <img v-lazy="item.Picture" style="width:100%;background-color:#fff;" :src="item.Picture" class="image">
                                </div>
                            </el-col>
                            <el-col :span="1">&nbsp;</el-col>
                        </router-link> 
                    </el-row>
                    <div class="mask" v-show="textTrue">亲，没 有 更 多 了</div>
            </div> 
        </div>

    </div>
</template>
<script>
import { Search,Swipe, SwipeItem, Lazyload, Indicator, Toast  } from 'mint-ui';
import fun from '../../common/index.js';
export default {
    data () {
        return {
            value: '',
            pageIndex: 1,
            pageSize: 15,
            shopArr:[],
            bannerArr: [],
            textTrue:false,
        }
    },
    mounted () {
        this.getBanner();
        this.getShop();
        this.scroll();
    },
    methods: {

        // 获取商品
        getShop () {
            let params = {
                pageIndex: this.pageIndex,
                pageSize: this.pageSize,
                SortType: 0,
                CategoryID: '',
                Sortkey: 0,
                Name: '',
                TenantId: 1,
                SeasonWeight: 0
            };
            this.axios.post('api/shop/prdoucts/getPrdouctsPage', params).then( res => {
                // 返回数据为空的时候
                if (res.data.Data == '') {
                    let instance = Toast({
                        message: '亲，没有更多了',
                        position:'bottom'
                    });
                    setTimeout(() => {
                        instance.close();
                    }, 2000);
                }
                this.shopArr.push(...res.data.Data);
                Indicator.close();

            }), err => {
                console.log(`${err}`)
            }
        },

        // 首页banner
        getBanner () {
            let params = {
                "TenantId": 1,
                "Position": 10
            };
            this.axios.post('api/cms/banner/getBanners',params).then( res => {
                this.bannerArr = res.data.Data
            }), err => {
                console.log(`${err}`)
            }
        },
        
        // 滚动加载
        scroll () {
            let homeSty = document.getElementsByClassName('shopItem')[0];
            homeSty.addEventListener('scroll',() => {
                // console.log(homeSty.scrollHeight +"="+ homeSty.clientHeight+"+"+homeSty.scrollTop)
                //意思就是内容总体的高度 - 滚动条的偏移值  === 元素的高度(包含内边)但不包含外边距，边框，以及滚动条
                if ( homeSty.scrollHeight < homeSty.clientHeight + homeSty.scrollTop + 2 ) {
                    this.pageIndex++;
                    this.getShop();
                    Indicator.open('加载中...');
                }
            });
        }

    }
}

</script>
<style>
    .home{
        height:92vh;
    }
    .el-card.is-always-shadow, .el-card.is-hover-shadow:focus, .el-card.is-hover-shadow:hover{
        box-shadow:none;
    }
    .el-card{
        margin-bottom:1rem;
        border:none;
    }
    .mint-search{
        width:100vw;
        height:4rem;
        background-color:#d9d9d9;
    }
    .mint-cell-wrapper{
        padding:0;
    }
    .banner{
        height:10rem;
        margin-bottom:.8rem;
    }
    .shopItem{
        background-color:#fff;
        text-align: center;
        width:94%;
        margin-left:3%;
        height:60vh;
        overflow-y: scroll;
    }
    .el-row{
        background-color:#fff;
        border-bottom:.8rem solid #eee;
        font-size:.8rem;
    }
    .bp{
        text-align:left;
        line-height:1.2rem;
        color:#666;
    }
    .hot{
        border:1px solid #26a2ff;
        color:#26a2ff;
        font-size:.5rem;
        padding:0 .5rem;
        border-radius:2rem;
        margin-right:.5rem;
    }
    .mask{
        position: absolute;
        bottom:5%;
        left:50%;
        width:60%;
        margin-left:-30%;
        background-color:#000;
        background:rgba(0,0,0,.5);
        color:#fff;
        line-height:3rem;
        border-radius: 2rem;
    }
</style>


