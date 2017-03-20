<template>
  <div class="sign-box">
    <div class="sign-con" v-show="signWay">
      <p class="con-title"></p>
      <i-form ref="formValidate" :model="formValidate" :rules="ruleInline">
        <Form-item prop="user">
          <i-input type="text" :model="formValidate.user" placeholder="邮箱"></i-input>
        </Form-item>
        <Form-item prop="password">
          <i-input type="password" :model="formValidate.password" placeholder="密码">
            <span slot="append">忘记密码？</span>
          </i-input>
        </Form-item>
        <Form-item>
          <i-button type="primary" @click="handleSubmit('formInline')">登录</i-button>
        </Form-item>
        <Form-item>
          <span class="other-way">或</span>
          <a href="javascript:;" class="other-btn"  @click="changeSign">注册</a>
        </Form-item>
      </i-form>
    </div>
    <div class="sign-con" v-show="!signWay">
      <p class="con-title"></p>
      <i-form ref="formRegister" :model="formRegister" :rules="ruleRegister">
        <Form-item prop="nickname">
          <i-input type="text" :model="formRegister.nickname" placeholder="昵称"></i-input>
        </Form-item>
        <Form-item prop="email">
          <i-input type="text" :model="formRegister.email" placeholder="注册邮箱"></i-input>
        </Form-item>
        <Form-item prop="password">
          <i-input type="password" :model="formRegister.password" placeholder="密码"></i-input>
        </Form-item>
        <Form-item>
          <i-button type="primary" @click="handleSubmit('formInline')">注册</i-button>
        </Form-item>
        <Form-item>
          <span class="other-way">或</span>
          <a href="javascript:;" class="other-btn" @click="changeSign">登录</a>
        </Form-item>
      </i-form>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        signWay: true,
        formValidate: {
          user: '',
          password: ''
        },
        ruleInline: {
          user: [
            {required: true, message: '请填写用户名', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请填写密码', trigger: 'blur'},
            {type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur'}
          ]
        },
        formRegister: {
          nickname: '',
          email: '',
          password: ''
        },
        ruleRegister: {
          nickname: [
            {required: true, message: '请填写用户名', trigger: 'blur'}
          ],
          email: [
            {required: true, message: '请填写邮箱地址', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请填写密码', trigger: 'blur'},
            {type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('提交成功!')
          } else {
            this.$Message.error('表单验证失败!')
          }
        })
      },
      changeSign () {
        this.signWay = !this.signWay
      }
    }
  }
</script>
<style lang="less" rel="stylesheet/less" type="text/css">
  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 100px #ebebeb inset;
  }
  .sign-box {
    display: flex;
    min-height: 100vh;
    margin: 0;
    .sign-con {
      margin: auto;
      width: 450px;
      padding-top: 50px;
      height: 600px;
      background-color: #ffffff;
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
      transition: all 0.5s cubic-bezier(0.18, 0.36, 0.6, 1),height 0.2s ease-out;
      .con-title {
        display: inline-block;
        width: 200px;
        height: 52px;
        background: url("../assets/login-logo.png") no-repeat;
        margin-bottom: 30px;
      }
      .ivu-form{
        display: inline-block;
        width:70%;
      }
      .ivu-input{
        border-radius: 0;
        height: 40px;
      }
      .ivu-input-group-append{
        border-radius: 0;
      }
      .ivu-btn{
        width: 100%;
        border-radius: 0;
        height: 40px;
        background-color: #41464b;
      }
      .ivu-btn-primary{
        background-color: #41464b;
        border:none;
        font-size:16px;
        letter-spacing: 10px;
        &:hover{
          background-color: #313438;
        }
      }
      .ivu-form-item{
        .other-way{
          font-size:16px;
        }
        .other-btn{
          font-size: 16px;
          color: #41464b;
          font-weight: 600;
        }
      }
    }
  }

  .demo {
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    -webkit-transform: translate3d(0, -2px, 0);
    transform: translate3d(0, -2px, 0);
  }
</style>
