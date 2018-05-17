<template>
    <div class="shopDetail">
        <!-- 商品图片 -->
         <!-- navbar -->  
            <mt-navbar v-model="selected">  
                <mt-tab-item id="1">商品</mt-tab-item>  
                <mt-tab-item id="2">详情</mt-tab-item>  
                <mt-tab-item id="3">评价</mt-tab-item>  
            </mt-navbar>  
            <!-- tabcontainer -->  
            <mt-tab-container v-model="selected" swipeable>  
                <mt-tab-container-item id="1">  
                    <!-- 商品 -->
                    <div class="shop">
                        <img style="width:100%;" :src="shopSrc" alt=""> 
                    </div>
                    <div style="text-align:left;padding:0 1rem;font-size:.8rem;">
                        <p style="font-size:1rem;"><span v-if="IsHot == '1'" class="hot">推荐</span> {{Name}}</p>
                        <p class="text"><span>适用人群</span>：{{ShortDescription}}</p>
                        <p class="text"><span>售价</span>：<span style="font-size:1rem;color:red;">$ {{Price}}</span></p>
                    </div>
                    <!-- 加入购物车 -->
                    <div class="carFixed">
                        <ul style="padding:0;margin:0;">
                            <li class="carImg"><img src="../../../static/shop/detial_btn_collection@2x.png" alt=""><br>收藏</li>
                                <li class="carImg">
                                    <router-link style="color:#333;text-decoration:none;" to="/?tab=car">
                                        <img  src="../../../static/shop/detial_btn_shoppingcar@2x.png" alt=""><br>购物车
                                    </router-link>
                                </li>
                            <li class="carImg">加入购物车</li>
                        </ul>
                    </div>

                </mt-tab-container-item>  
                <mt-tab-container-item id="2">  
                    <div class="FullDescription" v-html="FullDescription"></div>
                </mt-tab-container-item>  
                <mt-tab-container-item id="3">  
                    <img style="width:100%;" src="../../../static/shop/oz.jpg" alt="">
                </mt-tab-container-item>  
            </mt-tab-container>  

    </div>
    
</template>
<script>
import { Navbar, TabItem ,TabContainer ,TabContainerItem } from 'mint-ui';
export default {
    data () {
        return {
            shopSrc:'',
            selected: '1',
            IsHot: '',
            Name: '',
            ShortDescription: '',
            Price: '',
            FullDescription:''
        }
    },
    mounted () {
        this.getDetail();
    },
    methods: {
        // 获取商品详情
        getDetail () {
            let params = {
                id : this.$route.query.id,
                "SeckillPointPrice": 0
            }
            this.axios.post('api/shop/prdouct/getPrdouctByID',params).then( res => {
                // console.log(res.data)
                let data = res.data.Data;
                this.IsHot = data.IsHot;
                this.shopSrc = data.Picture;
                this.Name = data.Name;
                this.ShortDescription = data.ShortDescription;
                this.Price = data.Price;
                this.FullDescription = data.FullDescription;
            }),err => {
                console.log(`${err}`)
            }
        }
    }
}
</script>
<style>
    .mint-navbar{
        border-bottom:2px solid #f7f7f7;
    }
    .shopDetail .shop{
        margin-top:1rem;
        border-bottom:2px solid #f7f7f7;
    }
    .shopDetail .text{
        color:#999;
        font-size:.8rem;
    }
    .hot{
        border:1px solid #26a2ff;
        color:#26a2ff;
        font-size:.5rem;
        padding:0 .5rem;
        border-radius:2rem;
        margin-right:.5rem;
    }
    .shopDetail .carFixed{
        position: fixed;
        bottom:0;
        width:100vw;
        border-top:.5rem solid #f7f7f7;
    }
    .shopDetail .carImg{
        list-style: none;
        float:left;
        width:25%;
        text-align: center;
        font-size:.8rem;
    }
     .shopDetail .carImg:last-child{
         width:50%;
         line-height:4rem;
         background-color:#26a2ff;
         color:#fff;

     }
    .shopDetail .carImg img{
        margin-top:.5rem;
        width:1.5rem;
    }
    .shopDetail .FullDescription img{
        width:100%;
    }
</style>


