<template>
    <div class="my">
        <!-- 头像 -->
        <p class="bg">
            <img style="width:5rem;margin-top:1rem;" src="../../../static/shop/head.png" alt=""><br>
            <span style="line-height:3rem;color:#fff;">杰克 、露丝</span>
        </p>
        <!-- 我的订单 -->
        <div class="order">
            <h4>我得订单</h4>
            <ul style="padding:0;width:100%;">
                <li class="orderIcon" v-for="(item,index) in orderList" :key="index">
                    
                    <img :src="item.imgSrc" alt="">
                    <mt-badge style="position:relative;top:-1rem;" size="small" type="error">{{item.number}}</mt-badge>
                    <br>
                    <span>{{item.name}} </span>
                </li>
            </ul>
        </div>
        <!-- cell -->
        <div class="cell">
            <mt-cell v-for="(item,index) in cellList" :key="index" style="border-bottom:1px solid #eee;padding:0 1rem" title="" is-link>
                <span>{{item.name}}</span>
            </mt-cell>
        </div>  
    </div>
</template>
<script>
import { Badge, Cell } from 'mint-ui';
export default {
    data () {
        return {
            orderList:[
                {'imgSrc': './static/shop/user_btn_car@2x.png', 'name': '待发货', 'number': 1},
                {'imgSrc': './static/shop/user_btn_product@2x.png', 'name': '待收货', 'number': 2},
                {'imgSrc': './static/shop/user_btn_comment@2x.png', 'name': '待评论', 'number': 3},
                {'imgSrc': './static/shop/user_btn_succeed@2x.png', 'name': '已完成', 'number': 4},
            ],
            cellList:[
                {'name':'我的收藏','src': ''},
                {'name':'我的红包','src': ''},
                {'name':'我的推荐','src': ''},
                {'name':'邀请好友','src': ''},
                {'name':'收货地址','src': ''},
                {'name':'设置','src': ''}
            ]
        }
    }
}
</script>
<style>
    .my .bg{
        margin:0;
        width:100vw;
        height:10rem;
        background:url('../../../static/shop/myHead.png') no-repeat;
        background-size:100%;
    }
    .order{
        padding:0 1rem;
        text-align: left;
    }
    .orderIcon{
        float: left;
        list-style: none;
        width:25%;
        font-size:.7rem;
    }
    .cell{
        border-top:1.5rem solid #eee;
        clear: both;
        width:100vw;;
        margin:7rem 0;
    }
</style>

