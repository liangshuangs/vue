<template>
  <div class="box">
    <button class="btn button" :class="{disabled: !this.canClick}" @click="buttonDown">{{content}}</button>
  </div>
</template>
<script>
  export default {
      data() {
          return {
            content:'发送验证码',
            toTimes:5,
            canClick: true,
          }
      },
    methods:{
      buttonDown:function () {
          if (!this.canClick) {
              return
          }
        this.canClick = false
        this.content = this.toTimes + 's后重新发送'
        let clock = window.setInterval(() => {
          this.toTimes--
          this.content = this.toTimes + 's后重新发送'
          if (this.toTimes < 0) {
              this.canClick = true
            window.clearInterval(clock)
            this.content = "重新发送验证码"
            this.toTimes = 5;
          }
        },1000)
      }
    }
  }
</script>
<style>
  .box {
    width: 500px;
    height: 500px;
    border:1px solid red;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .btn {
    padding: 10px 15px;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
    border:1px solid dodgerblue;
    font-size: 16px;
    background-color: dodgerblue;
    color: #fff;
  }
  .disabled {
    opacity: 0.5;
  }
</style>
