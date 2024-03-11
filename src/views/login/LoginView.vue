<template>
    <div class="login-page">
        <div class="login-box">
            <h1>e店帮平台登录</h1>
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="用户名" prop="username">
                    <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="验证码" prop="captchacode">
                   <div class="captcha-box">
                        <el-input v-model.number="ruleForm.captchacode"></el-input>
                        <img height="40px" src="" alt="">
                   </div>
                </el-form-item>
                <el-form-item id="login-btn-box">
                    <el-button class="login-btn"  type="primary" @click="submitForm('ruleForm')">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import { validateUsername } from '@/utils/validate'
export default {
    data(){
        return{
            ruleForm:{
                username:"",
                password:"",
                captchacode:""
            },
            rules:{
                username:[
                    {
                        required:true,//必填项
                        message:"用户名不能为空哦", //提示
                        trigger:"blur" //触发
                    },
                    //自定义校验的写法
                    {
                        validator:validateUsername,
                        trigger:'blur'
                    }
                ],
                password:[
                    {
                        required:true,//必填项
                        message:"密码不能为空哦", //提示
                        trigger:"blur" //触发
                    }
                ],
                captchacode:[
                    {
                        required:true,//必填项
                        message:"验证码不能为空哦", //提示
                        trigger:"blur" //触发
                    }
                ]
            }
        }
    },
    methods:{
      submitForm(){
        
      }
    },
    components:{
        
    },
}
</script>

<style>
    .login-page {
        position: relative;
        width: 100%;
        height: 100%;
        background: url(../../assets/loginbg.jpg) center top no-repeat;
        background-size: cover;
    }
    .login-page .login-box {
        
        background-color: rgba(100, 24, 112, 0.568);
        position: absolute;
        width: 350px;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        padding-top: 20px;
        padding-right: 40px;
        border-radius: 50px;
    }
    .login-page .login-box h1{
        color: #0f0568e0;
        text-align: center;
        margin-bottom: 20px;
        padding-left: 35px;
        font-size: 28px;
        font-weight: bold;
    }
    .login-page .login-box el-input {
        width: 150px;
    }
   .login-page .login-box .el-form-item label {
    color: white; /* 更改输入框前面标签的文字颜色为白色 */
    }
    .login-page .login-box .captcha-box{
        display:flex;
    }
    .login-page .login-box .login-btn{
        font-size: 18px;
        color: wheat;
        width: 100%;
        border-radius: 12px;
        color: #9e8f8f;
        background-color: rgba(0, 255, 255, 0.669);
    }
    .login-page .login-box .login-btn:active {
        transform: scale(0.98);
    }
   .login-page .login-box .el-form-item#login-btn-box .el-form-item__content {
    margin-left: 40px!important;
    }

</style>