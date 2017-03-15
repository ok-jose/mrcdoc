<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="less" rel="stylesheet/less" type="text/css">
  html, body, h1, h2, h3, h4, h5, h6, hr, p, iframe, dl, dt, dd, ul, ol, li, pre, form, button, input, textarea, th, td, fieldset {
    margin: 0;
    padding: 0;
  }

  ul, ol, dl {
    list-style-type: none;
  }

  html, body {
    *position: static;
  }

  html {
    font-family: sans-serif;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }

  address, caption, cite, code, dfn, em, th, var {
    font-style: normal;
    font-weight: normal;
  }

  input, button, textarea, select, optgroup, option {
    font-family: inherit;
    font-size: inherit;
    font-style: inherit;
    font-weight: inherit;
  }

  input, button {
    overflow: visible;
    vertical-align: middle;
    outline: none;
  }

  body, th, td, button, input, select, textarea {
    font-family: "Microsoft Yahei", "Hiragino Sans GB", tahoma, arial, "\5B8B\4F53";
    font-size: 12px;
    color: #333;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
  }

  body {
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    font-size: 100%;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
      outline: none;
    }
    &.ie6:hover {
      zoom: 1;
    }
    &:focus, &:hover, &:active {
      outline: none;
    }
  }

  :focus {
    outline: none;
  }

  sub, sup {
    vertical-align: baseline;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
