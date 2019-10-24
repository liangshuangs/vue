<template>
    <div class="m-header clearfix">
        <div class="h-logo"></div>
        <div class="h-user">
            <span>您好,王大锤</span>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@import "mis@assets/vars.scss";
$height: 60px;
.m-header {
    .h-logo {
        display: inline-block;
        float: left;
        height: $height;
        width: 60px;
        background: url("../assets/images/logo.png") no-repeat;
        background-size: 100%;
        vertical-align: middle;
        background-position: center;
    }
    .h-user {
        float: right;
        font-size: $f14;
        height: $height;
        line-height: $height;
        cursor: pointer;
    }
}
</style>
