<template>
  <div class="tags-menu" :style="{left:clientX+'px',top:clientY+'px'}">
        <ul>
            <li v-for="item,index in tmenu" 
            :key="index"
            v-show="isShowLi(index)"
            @click="hdClick(index)"
            >
                <i :class="item.icon"></i>
                {{ item.text }}
            </li>
        </ul>
  </div>
</template>

<script>
export default {
    props:["clientX","clientY","clickIndex","tagsLength"],
    data() {
        return {
            tmenu:[
                {
                    icon:"el-icon-refresh-right",
                    text:"刷新页面"
                },
                {
                    icon:"el-icon-close",
                    text:"关闭当前"
                },
                {
                    icon:"el-icon-circle-close",
                    text:"关闭其他"
                },
                {
                    icon:"el-icon-back",
                    text:"关闭左侧"
                },
                {
                    icon:"el-icon-right",
                    text:"关闭右侧"
                },
                {
                    icon:"el-icon-circle-close",
                    text:"全部关闭"
                }

            ]
        }
    },
    methods:{
        hdClick(i){
            this.$emit("fn",i)
        },
        isShowLi(i){
            if(this.tagsLength===1){
                return i==0;
            }
            if(this.clickIndex==0){
                if(i==1||i==3){
                    return false;
                }
                return true;
            }
            if(this.clickIndex==1 && this.clickIndex==this.tagsLength-1){
                return ![3,4].includes(i);
            }
            else if(this.clickIndex==1 && this.clickIndex!=this.tagsLength-1){
                return i!=3;
            }
            if(this.clickIndex==this.tagsLength-1){
                return i!=4;
            }
            return true;
        }
    }
}
</script>

<style>
    .tags-menu{
        background-color: #fff;
        box-shadow: 2px 2px 4px #ccc;
        position: absolute;
        border-radius: 6px;
        left: 0;
        top: 0;
    }

    .tags-menu li{
        padding:5px 15px 5px;
        cursor: pointer;
    }
    .tags-menu li:hover{
        background-color: antiquewhite;
    }
    .tags-menu ul {
        padding: 10px 0;
    }
</style>