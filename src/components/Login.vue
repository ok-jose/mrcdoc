<template>
  <div class="login-box">
    <div class="login-con">
      <i-form v-ref:form-inline :model="formInline" :rules="ruleInline">
        <Form-item prop="user">
          <i-input type="text" :value.sync="formInline.user" placeholder="邮箱">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
          </i-input>
        </Form-item>
        <Form-item prop="password">
          <i-input type="password" :value.sync="formInline.password" placeholder="密码">
            <Icon type="ios-locked-outline" slot="prepend"></Icon>
          </i-input>
        </Form-item>
        <Form-item>
          <i-button type="primary" @click="handleSubmit('formInline')">登录</i-button>
        </Form-item>
      </i-form>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        formInline: {
          user: '',
          password: ''
        },
        ruleInline: {
          user: [
            { required: true, message: '请填写邮箱', trigger: 'blur' },
            { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请填写密码', trigger: 'blur' },
            { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
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
      }
    }
  }
</script>
<style lang="less" rel="stylesheet/less" type="text/css">
  /*.login-box{*/
    /*position: relative;*/
    /*width: 100%;*/
    /*height: 100%;*/
    /*background: url("../assets/1.jpg") no-repeat 0 center;*/
    /*background-size: cover;*/
    /*.login-con{*/
      /*width: 450px;*/
      /*height: 548px;*/
      /*margin:auto;*/
      /*padding: 90px 92px 30px 92px;*/
      /*background: rgba(0,0,0,.7);*/
      /*font-size: 14px;*/
      /*border-radius: 2px;*/
      /*box-shadow: 0 2px 3px rgba(213,213,213,0.7);*/
    /*}*/
  /*}*/
</style>
