<template>
  <div class="sign-box">
    <div class="sign-con" v-show="signWay">
      <p class="con-title"></p>
      <Form ref="formValidate" v-model="formValidate">
        <Form-item prop="user">
          <Input type="text" v-model="formValidate.user" placeholder="用户名"></Input>
        </Form-item>
        <Form-item prop="password">
          <Input type="password" v-model="formValidate.password" placeholder="密码">
            <span slot="append">忘记密码？</span>
          </Input>
        </Form-item>
        <Form-item>
          <Button type="primary" @click.native="handleSubmit">登录</Button>
        </Form-item>
        <Form-item>
          <span class="other-way">或</span>
          <a href="javascript:;" class="other-btn"  @click="changeSign">注册</a>
        </Form-item>
      </Form>
    </div>
    <div class="sign-con" v-show="!signWay">
      <p class="con-title"></p>
      <Form ref="formRegister" v-model="formRegister">
        <Form-item prop="nickname">
          <Input type="text" v-model="formRegister.nickname" placeholder="昵称"></Input>
        </Form-item>
        <!--<Form-item prop="email">-->
          <!--<Input type="text" v-model="formRegister.email" placeholder="注册邮箱"></Input>-->
        <!--</Form-item>-->
        <Form-item prop="password">
          <Input type="password" v-model="formRegister.password" placeholder="密码"></Input>
        </Form-item>
        <Form-item>
          <Button type="primary" @click.native="handleSignUp">注册</Button>
        </Form-item>
        <Form-item>
          <span class="other-way">或</span>
          <a href="javascript:;" class="other-btn" @click="changeSign">登录</a>
        </Form-item>
      </Form>
    </div>
  </div>
</template>
<script>
  import service from '../services/login'
  export default {
    data () {
      return {
        signWay: true,
        formValidate: {
          user: 'admin',
          password: 'admin'
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
      handleSubmit () {
        service.userLogin(this.formValidate.user, this.formValidate.password).then((data) => {
          if (data.status_code === 200) {
            // eslint-disable-next-line
            Cookies.set('token',data.data.token);
            this.$router.push({path: 'desktop'})
          }
        })
      },
      handleSignUp () {
        service.userSignUp(this.formRegister.nickname, this.formRegister.password).then((data) => {
          if (data.status_code === 200) {
            this.$Notice.open({
              title: '注册提示',
              desc: '恭喜，注册成功',
              duration: 2,
              onClose: () => {
                this.changeSign()
                this.formValidate.user = this.formRegister.nickname
                this.formValidate.password = this.formRegister.password
              }
            })
          } else if (data.status_code === 240) {
            this.$Notice.open({
              title: '注册提示',
              duration: 2,
              desc: data.message
            })
          }
        })
      },
      changeSign () {
        this.signWay = !this.signWay
      }
    }
  }
</script>
<style lang="less" rel="stylesheet/less" type="text/less">
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
