<template>
    <div class="clas">
        <!-- 搜索 -->
        <mt-search style="background-color:#fff;border-bottom:1px solid #eee;"
            v-model="value"
            cancel-text="取消"
            placeholder="搜索">
        </mt-search>
        <!-- 内容 -->
        <el-container>
            <!-- 侧导航 -->
            <el-aside width="8rem;">
               <ul class="cd">
                    <li @click="toggleNav(item.Picture,item.ID,item.ParentID)" :class="{'active' : item.ID == isActive}" class="nav" v-for="(item,index) in navArr" :key="index">
                       {{item.Name}}
                    </li>
               </ul>
            </el-aside>
            <!-- 主体内容 -->
            <el-main>
                <div class="main">
                    <img style="width:100%;" :src="Picture" alt="">
                    <ul>
                        <li class="cls" v-for="(item, index) in clsList" :key="index">
                            <p style="text-align:left;color:#26a2ff;margin:0;margin:1rem;">{{item.Name}}</p>
                            <ul>
                                <li class="imgList" v-for="(item, index) in item.Childs" :key="index">
                                    <img style="width:60%;" :src="item.Picture" alt=""><br>
                                    <span style="line-height:2rem;">{{item.Name}}</span>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </el-main>
        </el-container>

    </div>
</template>
<script>
import { Navbar, TabItem } from 'mint-ui';
export default {
   data () {
       return {
           value:'',
           navArr:[],
           selected: 1,
           Picture: '',
           isActive : 1,
           clsList: []
       }
   },
   mounted () {
       this.getSlider();
       this.getDetail(1,'尿裤专区');
   },
   methods: {
        
        //生成导航    
        getSlider () {
            let params ={
                "ID": 0,
                "TenantID": 1
            }
            this.axios.post('api/shop/category/getCategoryDown',params).then( res => {
                // console.log(res)
                if(res.data.Code == 0) {
                    this.navArr = res.data.Data;
                    this.Picture = res.data.Data[0].Picture
                }
            }),err => {
                console.log(`${err}`)
            }
        },
        
        //切换导航
        toggleNav (n,ID,Description) {
            this.isActive = ID;
            this.Picture = n;
            this.getDetail(ID,Description);
        },    
        
        // 生成分类子类
        getDetail (ID,ParentID) {
            let params = {
                "ID": ID,
                "TenantID": 1
            }
            this.axios.post('api/shop/category/getCategoryByID',params).then( res => {
                console.log(res)
                this.clsList = res.data.Data;
            }),err => {
                console.log(`${err}`)
            }
        }

   }

}
</script>
<style>
    .clas ul{
        margin:0;
        padding:0;
    }
    .clas li{
        list-style: none ;
    }
    .clas .imgList{
        float:left;
        width:33%;
        margin-top:1.5rem;
        font-size:.8rem;
    }
    .clas .el-menu{
        border:none;
    }
    .clas .el-row{
        border-bottom:none;
        border-right:1px solid #eee;
        height:100vh;
    }
    .clas .nav{
        list-style: none;
        line-height:4rem;
        color:#666;
        border-bottom:1px solid #eee;
    }
    .clas .cd{
        padding:1rem;
        margin-top:0;
        height:84vh;
        border-right:1px solid #eee;
        overflow-y: scroll;
    }
    .clas .main{
        height: 80vh;
        overflow-y: scroll;
    }
    .clas .el-main{
        padding:0;
    }
    .clas .cls{
        float:left;
    }
    .clas .active{
        color:#26a2ff;
    }
</style>

