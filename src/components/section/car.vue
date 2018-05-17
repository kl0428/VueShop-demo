<template>
    <div class="car">
        <p class="tip">购满200，立减20</p>
        <!-- 收货地址 -->
        <div class="address">
            <div class="left">
                <p><span>张三</span><span style="float:right">15888886666</span></p>
                <p class="text">
                    广东省广州市天河区 员村四横路10号大院c11仓，速尔快递
                </p>
            </div>
            <div class="right">
                <i class="el-icon-arrow-right"></i>
            </div>
        </div>
        <!-- 购物车列表 -->
        <div class="carList">
            <div class="listSty">
                <el-row :gutter="24" style="margin-top:1rem;margin:0;">
                     <el-col :span="5"><div class="grid-content bg-purple">
                        <i style="font-size:2rem;margin-top:3rem;" class="el-icon-circle-check-outline"></i>
                    </div></el-col>
                    <el-col :span="5"><div class="grid-content bg-purple">
                        <p style="margin:0;">
                            <img style="width:100%;margin-top:1rem;" src="http://static.mammasay.com/image/20170928/6364219578928512785818361.jpg" alt="">
                        </p>
                    </div></el-col>
                    <el-col :span="14"><div class="grid-content bg-purple">
                        <p style="margin-top:2rem;line-height:1rem;">
                            露安适婴儿手口湿巾20片装
                        </p>
                    </div></el-col>
                </el-row>
                <!-- 数量 -->
                <el-row :gutter="24" style="margin:0;">
                     <el-col :span="5"><div class="grid-content bg-purple">&nbsp;</div></el-col>
                    <el-col :span="5"><div class="grid-content bg-purple">
                        <p style="color:#5CC0F7;font-size:1rem;font-weight:bold;">￥5000</p>
                    </div></el-col>
                    <el-col :span="13"><div class="grid-content bg-purple" style="float:right;">
                        <el-input-number v-model="num1" @change="handleChange" :min="1" :max="20" label="描述文字"></el-input-number>
                    </div></el-col>
                </el-row>
            </div>

        </div>

        <!-- 结算 -->
        <div class="posi">结算</div>

    </div>
</template>
<script>
import { Radio, Button  } from 'mint-ui';
export default {
    data() {
        return {
            num1: 1
        };
    },
    methods: {
        handleChange(value) {
            console.log(value);
        }
    }
}
</script>
<style>
    .el-input-number{
        width:8rem;
    }
    .car .el-row {
        border:none;
    }
    .tip{
        width:100vw;
        color:#999;
        text-align: center;
        border-bottom:1px solid #eee;
        padding-bottom:1rem;
    }
    .address{
        width:92%;
        margin-left:4%;
        text-align: left ;
    }
    .left,.right{
        display: inline-block;
    }
    .left{
        width:80%;
    }
    .right{
        float:right;
        line-height:6rem;
    }
    .carList{
        width:100vw;
        border-top:1px solid #eee;
        height:62vh;
        overflow-y: scroll;
    }
    @media screen and (max-width: 350px) {
        .carList{
            width:100vw;
            border-top:1px solid #eee;
            height:56vh;
            overflow-y: scroll;
        }
    }
    .listSty{
        border-bottom:1px solid #eee;
        padding-bottom:1rem;
    }
    .text{
        font-size:.9rem;
        line-height:1rem
    }
    .posi{
        position: fixed;
        bottom:3.4rem;
        width:100%;
        background-color:#5CC0F7;
        color:#fff;
        line-height:3rem;
        z-index:10000000;
    }
</style>

