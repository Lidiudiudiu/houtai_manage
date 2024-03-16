<template>
    <!-- .native用法：在一个自定义组件给根标签添加事件，但不生效，给它添加修饰符 -->
  <div class="tags">
    <el-tag class="tag" size="medium" :closable="index>0"
    v-for="item,index in tags" :key="item.path"
    :effect="item.title==$route.meta.titles[$route.meta.titles.length-1]?'dark':'plain'"
    @click="goTo(item.path)"
    @close="close(index)"
    :disable-transitions="true"
    @contextmenu.native.prevent="rightClick($event,index)"
    >
    <i class="cir" v-show="item.title==$route.meta.titles[$route.meta.titles.length-1]"></i>
    {{ item.title }}</el-tag>

    <TagsMenu 
    v-show="isShowTagsMenu"
    :clientX="clientX"
    :clientY="clientY"
    :clickIndex="clickIndex"
    :tagsLength="tags.length"
    @fn="clickMenu"
    >
  </TagsMenu>
  </div>

</template>

<script>
import TagsMenu from './TagsMenu.vue';
export default {
    data() {
        return {
            tags:[
                {
                    title:"首页",
                    path:"/home",
                }
            ],
            isShowTagsMenu:false,
            clientX:0,
            clientY:0,
            clickIndex:0
        }
    },
    mounted(){
        //给文档添加点击事件
        document.addEventListener("click",this.closeMenu)
    },
    beforeDestroy(){
        document.removeEventListener("click",this.closeMenu);
    },
    components:{
        TagsMenu
    },
    methods:{
        clickMenu(i) {
            if (i === 4) {
                // 如果当前标签不是最后一个标签，则删除当前标签的下一个标签
                if (this.clickIndex < this.tags.length - 1) {
                    this.tags.splice(this.clickIndex + 1, 1);
                }
            } else if (i === 5) {
                // 关闭全部标签
                this.tags = [{
                    title: "首页",
                    path: "/home",
                }];
                // 跳转到首页
                this.goTo("/home");
            } else if (i === 0) {
                // 刷新页面
                window.location.reload();
            } else if (i === 1) {
                // 关闭当前标签页
                this.tags.splice(this.clickIndex, 1);
                if (this.clickIndex < this.tags.length) {
                    this.goTo(this.tags[this.clickIndex].path);
                } else {
                    this.goTo(this.tags[this.clickIndex - 1].path);
                }
            } else if (i === 2) {
                // 关闭其他标签页
                this.tags = [this.tags[this.clickIndex]];
                this.goTo(this.tags[0].path);
            } else if (i === 3) {
                // 关闭左侧标签页
                this.tags.splice(this.clickIndex - 1, 1)
            }
        },
        rightClick(e,i){
            this.isShowTagsMenu=true;
            this.clientX=e.clientX;
            this.clientY=e.clientY;
            this.clickIndex=i
        },
        closeMenu(){
            this.isShowTagsMenu = false;
        },
        goTo(path){
            this.$router.push(path)
            this.closeMenu();
        },
        close(i){
            //如果关闭的是当前项跳转最后一项
            if(this.tags[i].path===this.$route.path && i!==this.tags.length-1){
                this.$router.push(this.tags[this.tags.length-1].path)
            }
            //如果删除的是倒数第一项，跳转到倒数第二项
            else if(i===this.tags.length-1){
                this.$router.push(this.tags[this.tags.length-2].path)
            }
            //关闭当前项，本质上就是删除tags的对应项
            this.tags.splice(i,1)
            this.closeMenu();
        }
    },
    watch:{
        $route:{
            immediate:true,//立即监听
            handler(val,oldval){
                //如果当前路径没有tags里面的路径
                //数组名.find查找，调用结果是一个布尔值，找到就true,否则就false
                const bool = this.tags.find(item=>{
                    return val.path == item.path;
                })
                if(!bool){
                        this.tags.push({
                        title:val.meta.titles[val.meta.titles.length-1],
                        path:val.path,
                    })
                }
            }
        }
    }
}
</script>

<style>
    .tags{
        padding-left: 20px;
        padding-top: 3px;
    }
    .tags .tag{
        cursor: pointer;
        margin-right: 5px;
    }
    .tags .tag .cir{
        width: 8px;
        height: 8px;
        background-color: white;
        border-radius: 50%;
        display: inline-block;
        margin-right: 4px;
    }
</style>